from flask import Flask, request, jsonify
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/", methods=['GET', 'POST'])
def Home():
    return jsonify("Welcome to getPlaced Server.")

@app.route("/aptitude", methods=['GET', 'POST'])
def Aptitude():
    if request.method == "GET":
        aptitude_data = pd.read_json("./datasets/IndiaBix_Arithmetic_Aptitude.json")
        aptitude_data = aptitude_data.where(pd.notnull(aptitude_data), None)  # <- this converts NaN to None (which becomes null in JSON)
        aptitude_dict = aptitude_data.to_dict(orient='records')
        return jsonify(aptitude_dict)

import json

@app.route("/technical", methods=['GET', 'POST'])
def Technical():
    if request.method == "GET":
        with open("./datasets/technical_topics.json", "r", encoding="utf-8") as f:
            data = json.load(f)  
        return jsonify(data)     

  

if __name__ == "__main__":
    app.run(debug=True)
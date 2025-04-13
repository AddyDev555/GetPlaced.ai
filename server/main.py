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
        aptitude_dict = aptitude_data.to_dict(orient='records')
        return jsonify(aptitude_dict)

if __name__ == "__main__":
    app.run(debug=True)
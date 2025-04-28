from flask import Flask, request, jsonify
import pandas as pd
from flask_cors import CORS
import json
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb+srv://getplaced05:xsgIXQpRQ39Isbrf@getplaced.vhmclv2.mongodb.net/getPlaced?retryWrites=true&w=majority"
CORS(app)
mongo = PyMongo(app)

@app.route("/", methods=['GET', 'POST'])
def Home():
    return jsonify("Welcome to getPlaced Server.")

@app.route('/signup', methods=['POST'])
def signup():
    try:
        users = mongo.db.user
        data = request.get_json()

        email = data.get('email')
        password = data.get('password')
        fullName = f"{data.get('firstName', '').strip()} {data.get('lastName', '').strip()}"

        if not email or not password or not fullName:
            return jsonify({"success": False, "error": "Email, Password, Name are required."}), 400

        existing_user = users.find_one({'email': email})
        if existing_user:
            return jsonify({"success": False, "error": "User already exists."}), 401

        hashed_password = generate_password_hash(password)

        users.insert_one({
            'email': email,
            'password': hashed_password,
            'name': fullName,
        })

        return jsonify({"success": True, "message": "Registration successful!"}), 200

    except Exception as e:
        print(e)
        return jsonify({"success": False, "error": "Something went wrong during signup."}), 500

@app.route('/login', methods=['POST'])
def login():
    try:
        users = mongo.db.user
        data = request.get_json()

        email = data.get('email')
        password = data.get('password')
        if not email or not password:
            return jsonify({"success": False, "error": "Email and Password are required."}), 400

        user = users.find_one({'email': email})

        if user and check_password_hash(user['password'], password):
            return jsonify({"success": True, "message": "Login successful!", "data": {"name": user['name'], "email": user['email']}}), 200
        else:
            return jsonify({"success": False, "error": "Invalid email or password."}), 401

    except Exception as e:
        print(e)
        return jsonify({"success": False, "error": "Something went wrong during login."}), 500

@app.route("/aptitude", methods=['GET', 'POST'])
def Aptitude():
    if request.method == "GET":
        aptitude_data = pd.read_json("./datasets/IndiaBix_Arithmetic_Aptitude.json")
        aptitude_data = aptitude_data.where(pd.notnull(aptitude_data), None)
        aptitude_dict = aptitude_data.to_dict(orient='records')
        return jsonify(aptitude_dict)

@app.route("/technical", methods=['GET', 'POST'])
def Technical():
    if request.method == "GET":
        with open("./datasets/technical_topics.json", "r", encoding="utf-8") as f:
            data = json.load(f)  
        return jsonify(data)     

if __name__ == "__main__":
    app.run(debug=True)
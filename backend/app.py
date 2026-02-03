from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This allows requests from any domain

@app.route('/')
def home():
    return "Backend is running!"

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get("message")
    
    # Example response — replace this with your chatbot logic
    reply = f"You said: {user_message}"
    
    return jsonify({"reply": reply})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

from flask import Flask, request, jsonify
from flask_cors import CORS
from db import get_db_connection
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
CORS(app)

def expand_query(message):
    expansions = {
        "fees": "What are the college fees?",
        "exam": "When is the next examination?",
        "hostel": "How can I apply for a hostel?",
        "library": "What are the library timings?",
        "admission": "What is the admission process?",
    }
    return expansions.get(message.lower(), message)

def process_message(message):
    message = expand_query(message)
    # Keyword and synonym matching
    keywords = {
        "fees": "The college fees vary depending on the course. Please visit the college office for more details.",
        "exam": "The examination schedule is available on the college website.",
        "hostel": "The hostel facilities are available for both boys and girls. Please contact the hostel warden for more information.",
        "library": "The college library is open from 9 AM to 5 PM on all working days.",
        "admission": "The admission process for the new academic year will begin in the month of June. Please check the college website for updates.",
    }
    for keyword, response in keywords.items():
        if keyword in message.lower():
            return response

    # Structured database-driven FAQ system
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('SELECT answer FROM faqs WHERE question ILIKE %s', ('%' + message + '%',))
    faq_answer = cur.fetchone()
    cur.close()
    conn.close()
    if faq_answer:
        return faq_answer[0]

    # AI language model fallback
    return "I am sorry, I cannot answer that question at the moment."


@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.get_json()
    message = data['message']
    response = process_message(message)
    return jsonify({'response': response})

@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data['username']
    password = data['password']

    hashed_password = generate_password_hash(password, method='pbkdf2:sha256')

    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('INSERT INTO users (username, password) VALUES (%s, %s)', (username, hashed_password))
    conn.commit()
    cur.close()
    conn.close()

    return jsonify({'message': 'User created successfully'}), 201

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']

    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('SELECT * FROM users WHERE username = %s', (username,))
    user = cur.fetchone()
    cur.close()
    conn.close()

    if user and check_password_hash(user[2], password):
        return jsonify({'message': 'Login successful'})
    else:
        return jsonify({'message': 'Invalid credentials'}), 401


@app.route('/api/faqs')
def get_faqs():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('SELECT * FROM faqs;')
    faqs = cur.fetchall()
    cur.close()
    conn.close()
    return jsonify(faqs)

@app.route('/')
def index():
    return "Hello, World!"

if __name__ == '__main__':
    app.run(debug=True)

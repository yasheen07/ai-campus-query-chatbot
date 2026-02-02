# AI-Powered Campus Query Chatbot

This project is an AI-Powered Campus Query Chatbot that uses Natural Language Processing (NLP) and Hybrid Knowledge Retrieval to answer student queries.

## Features

- **User Authentication:** Secure registration, login, and logout functionality.
- **Intelligent Chatbot:** Hybrid knowledge retrieval approach for accurate responses.
- **Modern UI:** ChatGPT-style layout with dark/light mode support.
- **Responsive Design:** Works on all screen sizes.

## Project Structure

- `backend`: Contains the Flask backend application.
- `frontend`: Contains the React frontend application.
- `database`: Contains the database schema and setup instructions.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Python](https://www.python.org/)
- [PostgreSQL](https://www.postgresql.org/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/campus-chatbot.git
   ```

2. **Set up the database:**
   - Follow the instructions in the `database/README.md` file.

3. **Set up the backend:**
   ```bash
   cd backend
   pip install -r requirements.txt
   python app.py
   ```

4. **Set up the frontend:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

## Deployment

This project can be deployed using Docker.

1. **Build the Docker images:**
   ```bash
   docker-compose build
   ```

2. **Run the Docker containers:**
   ```bash
   docker-compose up
   ```

The application will be available at `http://localhost:3000`.

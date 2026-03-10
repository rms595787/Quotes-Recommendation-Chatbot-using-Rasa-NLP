# Quotes Recommendation Chatbot

An AI chatbot built using Rasa NLU and React that recommends quotes based on user input.

## Features

- Motivation quotes
- Inspirational quotes
- Love quotes
- Humor quotes
- Chat history
- Dark mode
- Multiple chat sessions

## Tech Stack

Frontend: React  
Backend: Rasa NLU  
API: REST Webhook

## Setup

### Backend

cd backend

python3.10 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

python3.10 -m rasa train
python3.10 -m rasa shell
python3.10 -m rasa run actions
python3.10 -m rasa run --enable-api --cors "\*"

### You should see:

```bash
Rasa server is up and running on http://0.0.0.0:5005
```

### and

```bash
Action endpoint is up and running on http://0.0.0.0:5055
```

## Make sure before every run

### 1️⃣ Kill all Rasa processes
```bash
pkill -f rasa
lsof -i :5005
lsof -i :5055
cd backend
rasa train
rasa run actions &
rasa run --enable-api --cors "*"
```

```bash
cd frontend
npm start
```

### Frontend

cd frontend
npm install
npm start

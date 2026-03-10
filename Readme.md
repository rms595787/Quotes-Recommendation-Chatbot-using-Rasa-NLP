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

### Frontend

cd frontend
npm install
npm start

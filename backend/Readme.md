## Backend Setup

cd backend

python3.10 -m venv venv
source venv/bin/activate

pip install -r requirements.txt

python3.10 -m rasa train
python3.10 -m rasa run actions
python3.10 -m rasa run --enable-api --cors "*"
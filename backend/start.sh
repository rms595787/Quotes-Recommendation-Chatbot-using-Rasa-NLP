#!/bin/bash

# Start action server
rasa run actions &

# Start Rasa server
rasa run --enable-api --cors "*" --port $PORT --model models
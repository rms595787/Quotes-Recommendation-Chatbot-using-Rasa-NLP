Great 👍 We will build this **step-by-step exactly the way Rasa projects are built** so your project works and you can explain it in viva.
This will take **~45–60 minutes if you follow carefully**.

I will give you the **exact folder structure + code + commands**.

---

# 🚀 STEP 1 — Install Requirements

First install **Python 3.9 or 3.10**

Check version:

```bash
python --version
```

If it is **3.11+**, Rasa may break.

---

## Install Rasa

Create a project folder:

```bash
mkdir quotes-chatbot
cd quotes-chatbot
```

Create virtual environment:

```bash
python -m venv venv
```

Activate it

### Mac / Linux

```bash
source venv/bin/activate
```

### Windows

```bash
venv\Scripts\activate
```

Now install Rasa:

```bash
pip install rasa
```

Check installation:

```bash
rasa --version
```

---

# 🚀 STEP 2 — Create Rasa Project

Run:

```bash
rasa init
```

Choose:

```
Proceed? (Y/n)
```

Type

```
Y
```

This creates a full project automatically.

You will get this structure:

```
quotes-chatbot
│
├── actions
│   └── actions.py
│
├── data
│   ├── nlu.yml
│   ├── stories.yml
│   └── rules.yml
│
├── models
│
├── config.yml
├── domain.yml
└── endpoints.yml
```

---

# 🚀 STEP 3 — Edit `nlu.yml`

Open:

```
data/nlu.yml
```

Replace with this:

```yaml
version: "3.1"

nlu:

- intent: greet
  examples: |
    - hi
    - hello
    - hey
    - good morning
    - good evening

- intent: motivation
  examples: |
    - give me motivation
    - i need motivation
    - motivate me
    - motivational quote
    - i feel demotivated

- intent: inspiration
  examples: |
    - inspire me
    - inspirational quote
    - give inspiration
    - i need inspiration

- intent: love
  examples: |
    - love quote
    - give love quote
    - romantic quote
    - something about love

- intent: humor
  examples: |
    - funny quote
    - make me laugh
    - humor quote

- intent: goodbye
  examples: |
    - bye
    - goodbye
    - see you
    - exit

- intent: affirm
  examples: |
    - yes
    - correct
    - right

- intent: deny
  examples: |
    - no
    - not really
    - nope
```

---

# 🚀 STEP 4 — Edit `domain.yml`

Open:

```
domain.yml
```

Replace with:

```yaml
version: "3.1"

intents:
  - greet
  - motivation
  - inspiration
  - love
  - humor
  - goodbye
  - affirm
  - deny

responses:

  utter_greet:
  - text: "Hello! I can recommend motivational, inspirational, love, or funny quotes."

  utter_motivation:
  - text: "Success is not final, failure is not fatal: it is the courage to continue that counts."

  utter_inspiration:
  - text: "The best way to predict the future is to create it."

  utter_love:
  - text: "Love all, trust a few, do wrong to none."

  utter_humor:
  - text: "I'm not lazy, I'm just on energy-saving mode."

  utter_goodbye:
  - text: "Goodbye! Stay positive."

session_config:
  session_expiration_time: 60
  carry_over_slots_to_new_session: true
```

---

# 🚀 STEP 5 — Edit `stories.yml`

Open:

```
data/stories.yml
```

Paste this:

```yaml
version: "3.1"

stories:

- story: greet and motivation
  steps:
  - intent: greet
  - action: utter_greet
  - intent: motivation
  - action: utter_motivation

- story: inspiration
  steps:
  - intent: inspiration
  - action: utter_inspiration

- story: love quote
  steps:
  - intent: love
  - action: utter_love

- story: humor quote
  steps:
  - intent: humor
  - action: utter_humor

- story: goodbye
  steps:
  - intent: goodbye
  - action: utter_goodbye
```

---

# 🚀 STEP 6 — Edit `rules.yml`

Open:

```
data/rules.yml
```

Paste:

```yaml
version: "3.1"

rules:

- rule: Say goodbye anytime
  steps:
  - intent: goodbye
  - action: utter_goodbye
```

---

# 🚀 STEP 7 — Train the Model

Run:

```bash
rasa train
```

You will see:

```
Training NLU model...
Training Core model...
```

Model will be created inside:

```
models/
```

---

# 🚀 STEP 8 — Run the Chatbot

Start chatbot:

```bash
rasa shell
```

Example conversation:

```
You: hello
Bot: Hello! I can recommend motivational, inspirational, love, or funny quotes.

You: give motivation
Bot: Success is not final, failure is not fatal: it is the courage to continue that counts.

You: funny quote
Bot: I'm not lazy, I'm just on energy-saving mode.

You: bye
Bot: Goodbye! Stay positive.
```

---

# 🚀 STEP 9 — (Optional but recommended for project)

Add **more quotes**.

Example:

```yaml
utter_motivation:
- text: "Success is not final..."
- text: "Believe you can and you're halfway there."
- text: "Dream big and dare to fail."
```

This makes the chatbot **look more intelligent**.

---

# 🎓 How to Explain This Project in Viva

Say:

> The Quotes Recommendation Chatbot uses **Rasa NLP framework** for intent recognition and dialogue management. The system identifies user intent such as motivation, inspiration, humor, or love using trained NLU data. Based on the detected intent, the chatbot responds with relevant quotes using predefined domain responses.

---
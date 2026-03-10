from typing import Any, Text, Dict, List
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
from actions.quotes import motivation_quotes, inspiration_quotes, love_quotes, humor_quotes
import random
import requests

# Quotes coming from zenquotes.io API
def get_api_quote():
    try:
        response = requests.get("https://zenquotes.io/api/random", timeout=3)

        if response.status_code == 200:
            data = response.json()
            quote = data[0]["q"]
            author = data[0]["a"]

            return f"🌐 Live Quote\n{quote} — {author}"

    except:
        pass

    return None


class ActionMotivationQuote(Action):

    def name(self) -> Text:
        return "action_motivation_quote"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        api_quote = get_api_quote()

        if api_quote:
            dispatcher.utter_message(text=api_quote)
        else:
            quote = random.choice(motivation_quotes)
            dispatcher.utter_message(text=f"📦 Backup Quote\n{quote}")

        return []


# In case of API failure
# Quotes coming from stored dataset
class ActionInspirationQuote(Action):

    def name(self) -> Text:
        return "action_inspiration_quote"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        api_quote = get_api_quote()

        if api_quote:
            dispatcher.utter_message(text=api_quote)
        else:
            quote = random.choice(inspiration_quotes)
            dispatcher.utter_message(text=f"📦 Backup Quote\n{quote}")

        return []


class ActionLoveQuote(Action):

    def name(self) -> Text:
        return "action_love_quote"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        api_quote = get_api_quote()

        if api_quote:
            dispatcher.utter_message(text=api_quote)
        else:
            quote = random.choice(love_quotes)
            dispatcher.utter_message(text=f"📦 Backup Quote\n{quote}")

        return []


class ActionHumorQuote(Action):

    def name(self) -> Text:
        return "action_humor_quote"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        api_quote = get_api_quote()

        if api_quote:
            dispatcher.utter_message(text=api_quote)
        else:
            quote = random.choice(humor_quotes)
            dispatcher.utter_message(text=f"📦 Backup Quote\n{quote}")

        return []
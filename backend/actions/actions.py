from typing import Any, Text, Dict, List
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
import random
from actions.quotes import motivation_quotes, inspiration_quotes, love_quotes, humor_quotes


class ActionMotivationQuote(Action):

    def name(self) -> Text:
        return "action_motivation_quote"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        quote = random.choice(motivation_quotes)
        dispatcher.utter_message(text=quote)

        return []


class ActionInspirationQuote(Action):

    def name(self) -> Text:
        return "action_inspiration_quote"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        quote = random.choice(inspiration_quotes)
        dispatcher.utter_message(text=quote)

        return []


class ActionLoveQuote(Action):

    def name(self) -> Text:
        return "action_love_quote"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        quote = random.choice(love_quotes)
        dispatcher.utter_message(text=quote)

        return []


class ActionHumorQuote(Action):

    def name(self) -> Text:
        return "action_humor_quote"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        quote = random.choice(humor_quotes)
        dispatcher.utter_message(text=quote)

        return []
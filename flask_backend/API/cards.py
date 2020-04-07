from flask import Blueprint, jsonify
from cards import cards_reader


cards = Blueprint("cards", __name__, url_prefix="/api/cards")


@cards.route('/')
def get_cards():
    ##request.args()
    cardImgs = []
    for card in cards_reader.jsonSet1:
        if card["collectible"]:
            cardImgs.append(card["assets"][0]["gameAbsolutePath"])
        #count += 1

    return { "imgs": cardImgs }


@cards.route('/globals')
def get_globals():
    return cards_reader.jsonGlobals


@cards.route('/all')
def get_cards_all():
    cards = {}
    for card in cards_reader.jsonSet1:
        card["isFiltered"] = False
        cards[card["cardCode"]] = card

    return jsonify(cards)
    
'''
===============================
    Card filtering strategy
===============================
1. Call cards from API (not sure what info to send exactly yet; implement a filter in API?)
2. When displaying card images set id to the card id?
3. On filter, hide the imgs based on card ids

Things To Consider
--------------------
1. Displaying associated cards/text/art etc...
'''
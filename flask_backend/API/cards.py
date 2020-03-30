from flask import Blueprint
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
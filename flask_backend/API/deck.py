from flask import Blueprint, request
from flask_backend import constants
import sys, base64

deck = Blueprint("deck", __name__, url_prefix="/api/deck")

@deck.route("/encode", methods=['POST'])
def encode_deck():
    #cheat for now, should be bit arrays but they only have a single value for now (0001)
    #used at the start of the deckcode
    d_format = 1
    d_encoding = 1
    result = [(d_format << 4) + d_encoding]

    try:
        if request.is_json:
            deck = request.get_json()
            ##fix me sir
            cards = [Card(key, deck[key]["total"]) for key in deck]

            if not validate_deck(cards):
                return "Invalid deck list"

            #probs better performance if assign all in one go instead of looping 3 times?
            three_cards = [card for card in cards if card.count == 3]
            two_cards = [card for card in cards if card.count == 2]
            one_cards = [card for card in cards if card.count == 1]

            grpd_threes = group_by_set_and_faction(three_cards)
            grpd_twos = group_by_set_and_faction(two_cards)
            grpd_ones = group_by_set_and_faction(one_cards)

            encode_groups_of(result, grpd_threes)
            encode_groups_of(result, grpd_twos)
            encode_groups_of(result, grpd_ones)

            deck_code = base64.b32encode(bytes(result))
            return { "code": str(deck_code, "utf-8").strip("=") }
            
        else:
            return "Invalid body. Expected a JSON body"
            
    except:
        ex = sys.exc_info()
    
    return "Something went wrong when trying to encode your decklist"


@deck.route("/decode")
def decode_deck():
    return "Not implemented yet"


'''Your friendly neighbourhood helpers!'''
#loops through decklist to make sure it is valid
#however doesn't check for MAX_CHAMPS
def validate_deck(card_list):
    count = 0
    factions = {}

    for card in card_list:
        if card.count > constants.MAX_DUPES:
            return False
            
        _, fac, _ = parse_card_code(card.code)
        factions[fac] = 1
        count += card.count

    isNotValid = count > constants.MAX_CARDS \
        or len(factions) > constants.MAX_FACTIONS
    return not isNotValid


#groups a list of card codes into a list of lists of the
#same set and faction
def group_by_set_and_faction(card_list):
    grpd_dict = {}

    for card in card_list:
        set_num, fac, _ = parse_card_code(card.code)
        if set_num + fac in grpd_dict:
            grpd_dict[set_num + fac].append(card)
        else:
            grpd_dict[set_num + fac] = [card]

    return [grpd_dict[key] for key in grpd_dict]


def encode_groups_of(result, grpd_list):
    #how many lists of set/faction groups
    tmpResults = []
    tmpResults.append(to_varint(len(grpd_list)))

    for grp in grpd_list:
        #how many cards within this set/faction group
        tmpResults.append(to_varint(len(grp)))
        setNum, fac, _ = parse_card_code(grp[0].code)
        tmpResults.append(to_varint(int(setNum)))
        tmpResults.append(to_varint(constants.FACTION_TO_INT[fac]))

        for card in grp:
            _, _, cardNum = parse_card_code(card.code)
            tmpResults.append(to_varint(int(cardNum)))
    
    for lst in tmpResults:
        for num in lst:
            result.append(num)


#returns set#, faction abrv, card# in that order
def parse_card_code(code):
    return code[0:2], code[2:4], code[4:]


def to_varint(num: int):
    MSB = 128
    NOT_MSB = 127
    byte_buff = []
    
    if(num == 0):
        byte_buff.append(0)

    while(num != 0):
        curr_byte = NOT_MSB & num
        num >>= 7

        if(num != 0):
            curr_byte |= MSB
        
        byte_buff.append(curr_byte)

    return byte_buff


class Card:
    code = ""
    count = 0

    def __init__(self, code, count):
        self.code = code
        self.count = count
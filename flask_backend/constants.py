## not really constants since this is python
## just used mainly to minimise magic strings/numbers
import os


''' Filter/search terms for cards '''
FLTR_FACTION = "faction"


''' Relative paths to files '''
PATH_CURR = os.path.dirname(__file__)
PATH_CARDS_GLOBAL = PATH_CURR + "/content/json/globals-en_us.json"
PATH_CARDS_SET1 = PATH_CURR + "/content/json/set1-en_us.json"

''' Riot Games API '''
RIOT_BASE_URL = "https://americas.api.riotgames.com"
RIOT_API_VERSION = "v1"
RIOT_HDR_TKN = "X-Riot-Token"

''' Deck/Card related terms '''
MAX_FACTIONS = 2
MAX_CARDS = 40
MAX_CHAMPS = 6
MAX_DUPES = 3
VERSION = 1
SET = 1
FACTION_TO_INT = {
    "DE": 0 
    , "FR": 1
    , "IO": 2
    , "NX": 3
    , "PZ": 4
    , "SI": 5
    , "BW": 6
}
INT_TO_FACTION = {
    0: "DE"
    , 1: "FR"
    , 2: "IO"
    , 3: "NX"
    , 4: "PZ"
    , 5: "SI"
    , 6: "BW"
}
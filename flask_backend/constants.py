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
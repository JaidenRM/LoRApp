## not really constants since this is python
## just used mainly to minimise magic strings/numbers
import os


''' Filter/search terms for cards '''
FLTR_FACTION = "faction"


''' Relative paths to files '''
PATH_CURR = os.path.dirname(__file__)
PATH_CARDS_GLOBAL = PATH_CURR + "/content/json/globals-en_us.json"
PATH_CARDS_SET1 = PATH_CURR + "/content/json/set1-en_us.json"
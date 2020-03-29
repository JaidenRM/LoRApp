import json
from flask_backend import constants
        

with open(constants.PATH_CARDS_GLOBAL) as fGlobal:
    jsonGlobals = json.load(fGlobal)
with open(constants.PATH_CARDS_SET1, encoding="utf-8") as fSet1:
     jsonSet1 = json.load(fSet1)
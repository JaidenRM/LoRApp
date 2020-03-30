from flask import Blueprint
from flask_backend import constants
import requests
from flask_backend.API import secret

riot_lor = Blueprint("riot_lor", __name__, url_prefix="/api/riotLoR")

@riot_lor.route("/leaderboards")
def top200_players():
    headers = { constants.RIOT_HDR_TKN : secret.API_KEY }
    url = constants.RIOT_BASE_URL + "/lor/ranked/" + constants.RIOT_API_VERSION + "/leaderboards"
    res = requests.get(url, headers=headers)
    
    return res.json()
    
import flask
from API import cards, riot_lor, deck

app = flask.Flask(__name__)
app.register_blueprint(cards.cards)
app.register_blueprint(riot_lor.riot_lor)
app.register_blueprint(deck.deck)

@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def catch_all(path):
    return flask.render_template("index.html", token="Hello Flask+React!")

# @app.route('/api/cards')
# def get_cards():
#     return { "cards": "I am a set of cards" }
'''
@app.route("/top-players")
def top_players():
    return flask.render_template("top-players.html")


@app.route("/statistics")
def card_statistics():
    return flask.render_template("card-statistics.html")


@app.route("/about")
def about():
    return flask.render_template("about.html")


@app.route("/card-gallery")
def card_gallery():
    return flask.render_template("card-gallery.html")


@app.route("/deck-builder")
def deck_builder():
    return flask.render_template("deck-builder.html")


@app.route("/deck-library")
def deck_library():
    return flask.render_template("deck-library.html")
'''

if __name__ == "__main__":
    app.config.from_object('configurations.DevelopmentConfig')
    app.run()

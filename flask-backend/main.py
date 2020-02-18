import flask
app = flask.Flask(__name__)


@app.route("/")
def index():
    return flask.render_template("index.html", token="Hello Flask+React!")


@app.route("/home")
def home():
    return "<h1>YOU ARE HOME!</h1>"


if __name__ == "__main__":
    app.config.from_object('configurations.DevelopmentConfig')
    app.run()

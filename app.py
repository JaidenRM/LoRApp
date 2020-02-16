from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
  return "Hello World!"

@app.route("/home")
def home():
    return "<h1>YOU ARE HOME!</h1>"

if __name__ == "__main__":
  app.run()
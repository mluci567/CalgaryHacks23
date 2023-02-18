from flask import Flask

app = Flask(__name__)

@app.route("/members")

# Json should show on local host ( run python3 server.py in a venv )
def members():
    return {"members": ["Member1", "Member2", "Member3"]}

if __name__ == "__main__":
    app.run(debug=True)

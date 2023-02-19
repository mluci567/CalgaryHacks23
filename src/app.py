import json
from flask import Flask, request, render_template, session
import flask
from flask_login import UserMixin, login_required
from flask_sqlalchemy import SQLAlchemy
import psycopg2
from flask_login import LoginManager
#import hashlib

app = Flask(__name__, template_folder= "pages")
login_manager = LoginManager()
app.secret_key = '73e57ae4a95b2e2967b1f9c3382bcac800c3c54e3a104bd805abe665e73718f3'

#password = 'pa$$w0rd'
#h = hashlib.md5(password.encode())
#print(h.hexdigest())

db_name = 'users.sqlite3'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + db_name
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
db = SQLAlchemy()
db.init_app(app)
login_manager.init_app(app)

class User(db.Model, UserMixin):
    __tablename__ = 'users'
    #id = db.Column(db.Integer, primary_key=True)

    # User Authentication fields
    name = db.Column(db.String(255), nullable=False, primary_key=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    password = db.Column(db.String(255), nullable=False)
    institution = db.Column(db.String(255), nullable = False)

@login_manager.user_loader
def load_user(user_id):
    return User.get(user_id)

#john = User(email="johndoe@example.com", password="mysecretpassword", institution="Mount Royal University")
#jane = User(email="janedoe@example.com", password="password123", institution="University of Calgary")

@app.route("/")
def index():
    try:
        users = User.query.filter_by(institution='Mount Royal University').order_by(User.email).all()
        user_text = '<ul>'
        for user in users:
            user_text += '<li>' + user.email + ', ' + user.password + '</li>'
        user_text += '</ul>'
        return user_text
    except Exception as e:
        # e holds description of the error
        error_text = "<p>The error:<br>" + str(e) + "</p>"
        hed = '<h1>Something is broken.</h1>'
        return hed + error_text

# Login page
@app.route("/login")
def log_in():
    return render_template('Login.js')

@app.route("/home")
def home():
    return render_template('Home.js')

@app.route("/map")
def map():
    return render_template('Map.js')

@app.route("/register")
def register():
    return render_template('Register.js')

@app.route("/register_form", methods=['GET', 'POST'])
def register_post():
    return 

@app.route("/view")
def view_campus():
    return render_template('View_Campus.js')

@app.route("/find_group")
def find_group():
    return render_template('FindGroup.js')

@app.route("/find_room")
def find_room():
    return render_template('FindRoom.js')

@app.route("/create_group")
def create_group():
    return render_template('CreateGroup.js')

@app.route("/feedback")
def feedback():
    return render_template('Feedback.js')

@app.route("/layout")
def layout():
    return render_template('Layout.js')

if __name__ == "__main__":
    app.run(debug=True)
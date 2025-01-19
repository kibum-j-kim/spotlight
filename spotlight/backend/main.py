from flask import request, jsonify
from flask_cors import cross_origin
#from config import app, db
from datetime import datetime
from models import User, Event, Sponsor, EventSponsor, Comment
    
from flask_sqlalchemy import SQLAlchemy
from flask import Flask
from flask_cors import CORS
app = Flask(__name__)
CORS(app)


app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///mydatabase.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

@app.route("/users", methods=["GET"])
def get_users():
    users = User.query.all()
    json_users = list(map(lambda x: x.to_json(), users))
    return jsonify({"users": json_users})

@app.route("/create_user", methods=["POST"])
def create_user():
    first_name = request.json.get("firstName")
    last_name = request.json.get("lastName")
    email = request.json.get("email")
    password = request.json.get("password")

    if not first_name or not last_name or not email or not password:
        return jsonify({"message": "You must include a first name, last name, email, and password"}), 400

    new_user = User(
        first_name=first_name,
        last_name=last_name,
        email=email,
        password=password
    )
    try:
        db.session.add(new_user)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    return jsonify({"message": "User created!"}), 201

@app.route("/update_user/<int:user_id>", methods=["PATCH"])
def update_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({"message": "User not found"}), 404

    data = request.json
    user.first_name = data.get("firstName", user.first_name)
    user.last_name = data.get("lastName", user.last_name)
    user.email = data.get("email", user.email)

    password = data.get("password")
    if password:
        user.password = password

    db.session.commit()
    return jsonify({"message": "User updated."}), 200

@app.route("/delete_user/<int:user_id>", methods=["DELETE"])
def delete_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({"message": "User not found"}), 404

    db.session.delete(user)
    db.session.commit()
    return jsonify({"message": "User deleted!"}), 200

@app.route("/login", methods=["POST"])
def login():
    email = request.json.get("email")
    password = request.json.get("password")

    if not email or not password:
        return jsonify({"message": "Email and password are required"}), 400

    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({"message": "User not found"}), 404

    if user.password != password:
        return jsonify({"message": "Invalid password"}), 401

    return jsonify({"message": "Login successful!"}), 200

# @app.route("/events", methods=["GET"])
# def get_events():
#     events = Event.query.all()
#     json_events = [event.to_json() for event in events]
#     return jsonify({"events": json_events})

# @app.route("/create_event", methods=["POST"])
# def create_event():
#     data = request.json
#     required_fields = ["title", "category", "location", "startTime", "createdBy"]
#     for field in required_fields:
#         if field not in data:
#             return jsonify({"message": f"Missing required field: {field}"}), 400

#     new_event = Event(
#         title=data["title"],
#         description=data.get("description"),
#         category=data["category"],
#         location=data["location"],
#         start_time=datetime.fromisoformat(data["startTime"]),
#         end_time=datetime.fromisoformat(data["endTime"]) if data.get("endTime") else None,
#         created_by=data["createdBy"],
#         image_url=data.get("imageUrl"),
#     )
#     try:
#         db.session.add(new_event)
#         db.session.commit()
#     except Exception as e:
#         return jsonify({"message": str(e)}), 400

#     return jsonify({"message": "Event created!"}), 201

# @app.route("/update_event/<int:event_id>", methods=["PATCH"])
# def update_event(event_id):
#     event = Event.query.get(event_id)
#     if not event:
#         return jsonify({"message": "Event not found"}), 404

#     data = request.json
#     event.title = data.get("title", event.title)
#     event.description = data.get("description", event.description)
#     event.category = data.get("category", event.category)
#     event.location = data.get("location", event.location)
#     event.start_time = datetime.fromisoformat(data["startTime"]) if data.get("startTime") else event.start_time
#     event.end_time = datetime.fromisoformat(data["endTime"]) if data.get("endTime") else event.end_time
#     event.image_url = data.get("imageUrl", event.image_url)

#     db.session.commit()
#     return jsonify({"message": "Event updated."}), 200

# @app.route("/delete_event/<int:event_id>", methods=["DELETE"])
# def delete_event(event_id):
#     event = Event.query.get(event_id)
#     if not event:
#         return jsonify({"message": "Event not found"}), 404

#     db.session.delete(event)
#     db.session.commit()
#     return jsonify({"message": "Event deleted!"}), 200

# @app.route("/sponsors", methods=["GET"])
# def get_sponsors():
#     sponsors = Sponsor.query.all()
#     json_sponsors = [sponsor.to_json() for sponsor in sponsors]
#     return jsonify({"sponsors": json_sponsors}), 200

# @app.route("/create_sponsor", methods=["POST"])
# def create_sponsor():
#     data = request.json
#     if not data.get("name"):
#         return jsonify({"message": "Sponsor name is required"}), 400

#     new_sponsor = Sponsor(
#         name=data["name"],
#         contact_email=data.get("contactEmail"),
#         contact_phone=data.get("contactPhone"),
#         website=data.get("website"),
#     )
#     try:
#         db.session.add(new_sponsor)
#         db.session.commit()
#     except Exception as e:
#         return jsonify({"message": str(e)}), 400

#     return jsonify({"message": "Sponsor created!"}), 201

# @app.route("/update_sponsor/<int:sponsor_id>", methods=["PATCH"])
# def update_sponsor(sponsor_id):
#     sponsor = Sponsor.query.get(sponsor_id)
#     if not sponsor:
#         return jsonify({"message": "Sponsor not found"}), 404

#     data = request.json
#     sponsor.name = data.get("name", sponsor.name)
#     sponsor.contact_email = data.get("contactEmail", sponsor.contact_email)
#     sponsor.contact_phone = data.get("contactPhone", sponsor.contact_phone)
#     sponsor.website = data.get("website", sponsor.website)

#     db.session.commit()
#     return jsonify({"message": "Sponsor updated."}), 200

# @app.route("/delete_sponsor/<int:sponsor_id>", methods=["DELETE"])
# def delete_sponsor(sponsor_id):
#     sponsor = Sponsor.query.get(sponsor_id)
#     if not sponsor:
#         return jsonify({"message": "Sponsor not found"}), 404

#     db.session.delete(sponsor)
#     db.session.commit()
#     return jsonify({"message": "Sponsor deleted!"}), 200

# @app.route("/comments", methods=["GET"])
# def get_comments():
#     comments = Comment.query.all()
#     json_comments = [comment.to_json() for comment in comments]
#     return jsonify({"comments": json_comments}), 200

# @app.route("/create_comment", methods=["POST"])
# def create_comment():
#     data = request.json
#     required_fields = ["content", "userId", "eventId"]
#     for field in required_fields:
#         if field not in data:
#             return jsonify({"message": f"Missing required field: {field}"}), 400

#     new_comment = Comment(
#         content=data["content"],
#         user_id=data["userId"],
#         event_id=data["eventId"],
#     )
#     try:
#         db.session.add(new_comment)
#         db.session.commit()
#     except Exception as e:
#         return jsonify({"message": str(e)}), 400

#     return jsonify({"message": "Comment created!"}), 201

# @app.route("/update_comment/<int:comment_id>", methods=["PATCH"])
# def update_comment(comment_id):
#     comment = Comment.query.get(comment_id)
#     if not comment:
#         return jsonify({"message": "Comment not found"}), 404

#     data = request.json
#     comment.content = data.get("content", comment.content)

#     db.session.commit()
#     return jsonify({"message": "Comment updated."}), 200

# @app.route("/delete_comment/<int:comment_id>", methods=["DELETE"])
# def delete_comment(comment_id):
#     comment = Comment.query.get(comment_id)
#     if not comment:
#         return jsonify({"message": "Comment not found"}), 404

#     db.session.delete(comment)
#     db.session.commit()
#     return jsonify({"message": "Comment deleted!"}), 200

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)

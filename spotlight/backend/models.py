from config import db
from datetime import datetime

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(80), nullable=False)
    last_name = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_json(self):
        return {
            "id": self.id,
            "firstName": self.first_name,
            "lastName": self.last_name,
            "email": self.email
        }


class Event(db.Model):
    __tablename__ = 'events'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=True)
    category = db.Column(db.String(50), nullable=False)  # Predefined categories
    location = db.Column(db.String(255), nullable=False)
    start_time = db.Column(db.DateTime, nullable=False)
    end_time = db.Column(db.DateTime, nullable=True)
    created_by = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)  # Creator of the event
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    image_url = db.Column(db.String(255), nullable=True)  # URL or file path for event image

    user = db.relationship("User", backref=db.backref("events", lazy=True))

    def to_json(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "category": self.category,
            "location": self.location,
            "startTime": self.start_time,
            "endTime": self.end_time,
            "createdBy": self.created_by,
            "imageUrl": self.image_url
        }



class Sponsor(db.Model):
    __tablename__ = 'sponsors'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    contact_email = db.Column(db.String(120), nullable=True)
    contact_phone = db.Column(db.String(20), nullable=True)
    website = db.Column(db.String(255), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "contactEmail": self.contact_email,
            "contactPhone": self.contact_phone,
            "website": self.website
        }


class EventSponsor(db.Model):
    __tablename__ = 'event_sponsors'
    event_id = db.Column(db.Integer, db.ForeignKey('events.id'), primary_key=True)
    sponsor_id = db.Column(db.Integer, db.ForeignKey('sponsors.id'), primary_key=True)

    event = db.relationship("Event", backref=db.backref("event_sponsors", lazy=True))
    sponsor = db.relationship("Sponsor", backref=db.backref("event_sponsors", lazy=True))

    def to_json(self):
        return {
            "eventId": self.event_id,
            "sponsorId": self.sponsor_id
        }

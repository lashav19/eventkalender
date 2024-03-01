import firebase_admin
from firebase_admin import credentials, db

cred = credentials.Certificate("api\\credentials.json")
firebase_admin.initialize_app(cred, {
    'databaseURL': "https://eventkalender-d93af-default-rtdb.europe-west1.firebasedatabase.app/"
})

ref = db.reference('/')


events = [
    {"eventname": "event1", "place": "place1"},
    {"eventname": "event2", "place": "place2"}
]

for event in events:
    ref.child('events').push(event)

print("added")



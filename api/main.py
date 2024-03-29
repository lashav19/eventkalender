import firebase_admin, json
from flask import Flask, request, abort, jsonify, render_template, send_from_directory
from flask_cors import CORS
from datetime import datetime
from firebase_admin import credentials, db
from pydantic import BaseModel
    
try:
    cred = credentials.Certificate("credentials.json")
except FileNotFoundError:
    cred = credentials.Certificate("api\\credentials.json")

firebase_admin.initialize_app(cred, {

    'databaseURL': "https://eventkalender-d93af-default-rtdb.europe-west1.firebasedatabase.app/"
})


app = Flask(__name__)
CORS(app)

@app.route('/api/test', methods=['POST'])
def test():
        data = request.json #for å hente parameter fra post requests
        eventType = data['event']
        eventPlace = data['place']
        eventName = data['name']
        eventStart = data['start']
        eventSlutt = data['start']
        eventDate = data['date']
       


app.config['CORS_HEADERS'] = 'Content-Type'
@app.route('/api/create', methods=['POST'])
def addevent():
    try:
        data = request.json #for å hente parameter fra post requests
        eventType = data.get('event')
        eventPlace = data.get('place')
        eventName = data.get('name')
        eventStart = data.get('start')
        eventSlutt = data.get('slutt')
        eventDate = data.get('dato')
        vars = [eventType, eventPlace, eventName, eventStart, eventSlutt, eventDate]
        for var in vars:
            if var:
                print(var)
            else:
                print("var not found")
                abort(400)


        event = {"name": eventName, "place": eventPlace, "type": eventType, "start": eventStart, "slutt": eventSlutt, "dato": eventDate} #Format for hvordan det skal se ut
        ref = db.reference('/')
        ref.child('events').push(event)


        return jsonify({"message": "Event created successfully"}), 201
    except Exception as e:
        print(e)
        return abort(400)


@app.route('/api/events/')
def getEvents(id=None):
    id = request.args.get('i') #for å hente parameter fra post requests
    ref = db.reference('events')
    if id:
        events = ref.child(id).get()
        return events

    events = ref.get()
    if events:
        return events
    else:
        abort(404)








if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3001, debug=True)
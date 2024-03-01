import firebase_admin, json
from flask import Flask, request, abort
from flask_cors import CORS
from datetime import datetime
from firebase_admin import credentials, db




try:
    cred = credentials.Certificate("credentials.json")
except FileNotFoundError:
    cred = credentials.Certificate("api\\credentials.json")

firebase_admin.initialize_app(cred, {
    'databaseURL': "https://eventkalender-d93af-default-rtdb.europe-west1.firebasedatabase.app/"
})


app = Flask(__name__)
CORS(app)
@app.route('/time')
def getTime():
    return {"time": datetime.now().strftime("%d-%m-%y %H:%M")}

@app.route("/api/test")
def testapi():
    data = request.form
    eventName = data.get('event')
    eventPlace = data.get('place')

    if eventName and eventPlace:
        print(eventName, eventPlace)
        return {"ok": True}
    return abort(400)
    

@app.route('/api/event')
@app.route('/api/event/create', methods=['POST'])
def addevent():
    try:
        data = request.form #for å hente parameter fra post requests

        eventName = data['event']
        eventPlace = data['place']

        event = {"name": eventName, "place": eventPlace} #Format for hvordan det skal se ut
        ref = db.reference('/')
        ref.child('events').push(event)
        return{"ok": True}
    except Exception as e:
        return{"ok": False, "Error": json.dumps(e)}


@app.route('/api/events')
@app.route('/api/events/<string:name>')
def getEvents(name=None):
    ref = db.reference('events')
    events = ref.get()
    if events:
        return events
    else:
        abort(404)








if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3001, debug=True)
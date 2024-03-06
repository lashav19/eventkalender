import React, { useState } from 'react';

export default function EventCreator() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [formData, setFormData] = useState({
        eventName: '',
        eventType: '',
        eventPlace: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const sendData = () => {
        setLoading(true);
        const body = JSON.stringify({
            event: formData.eventType,
            place: formData.eventPlace,
            name: formData.eventName
        });
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "/api/create");
        xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
        xhr.onload = () => {
            if (xhr.readyState === 4) {
                setLoading(false);
                if (xhr.status === 201) {
                    setSuccess(true);
                } else {
                    setError(true);
                }
            }
        };
        xhr.send(body);
    };

    return (
        <>
            <div className="container p-5 my-2 text-body">
                <h1>Lag event</h1>
                <div className="shadow p-5 rounded-5 creator-container">
                    <label htmlFor="eventName" className="p-2 t">Name</label>
                    <input type="text" name="eventName" className="form-control p-2" value={formData.eventName} onChange={handleChange} />

                    <label htmlFor="eventType" className="p-2">Type</label>
                    <input type="text" name="eventType" className="form-control p-2" value={formData.eventType} onChange={handleChange} />

                    <label htmlFor="eventPlace" className="p-2">Place</label>
                    <input type="text" name="eventPlace" className="form-control p-2" value={formData.eventPlace} onChange={handleChange} />

                    <label htmlFor="eventDate" className="p-2">dato</label>
                    <input type='date' name="eventDate" className="form-control p-2 w-25" value={formData.eventPlace} onChange={handleChange} />


                    {loading ? (
                        <button className="btn btn-success my-4" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Sending...
                        </button>
                    ) : (
                        <button className="btn btn-success my-4" onClick={sendData}>Create Event</button>
                    )}

                    {success && (
                        <div className="alert alert-success alert-dismissible my-4" role="alert">
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                            Event created successfully!
                        </div>
                    )}

                    {error && (
                        <div className="alert alert-danger alert-dismissible my-4" role="alert">
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                            Error occurred while creating the event.
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

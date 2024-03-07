import React, { useState } from 'react';

export default function EventCreator() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [formData, setFormData] = useState({
        eventName: '',
        eventType: '',
        eventPlace: '',
        eventDate: new Date().getDate(),
        eventStart: '',
        eventSlutt: '',
    });


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        console.log(event.target.value);
    
        // Update the input value directly
        event.target.value = value;
    };
    


    const sendData = () => {
        setLoading(true);
        const body = JSON.stringify({
            event: formData.eventType,
            place: formData.eventPlace,
            name: formData.eventName,
            dato: formData.eventDate,
            start: formData.eventStart,
            slutt: formData.eventSlutt
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
                
                <div className="shadow p-5 rounded-5 creator-container">

                <h1>Lag event</h1>
                   <form >
                   <label htmlFor="eventName" className="p-2 t">Name</label>
                    <input type="text" name="eventName" className="form-control p-2" value={formData.eventName} onChange={handleChange} required/>

                    <label htmlFor="eventType" className="p-2">Type</label>
                    <input type="text" name="eventType" className="form-control p-2" value={formData.eventType} onChange={handleChange} required/>

                    <label htmlFor="eventPlace" className="p-2">Place</label>
                    <input type="text" name="eventPlace" className="form-control p-2" value={formData.eventPlace} onChange={handleChange} required />

                    <label htmlFor="eventDate" className="p-2">Dato</label>
                        <input type='date' name="eventDate" className="form-control p-2 w-25" value={formData.eventDate} onChange={handleChange} />


                        <label htmlFor="eventStart" className="p-2">Start</label>
                        <label htmlFor="eventSlutt" className="p-2 mx-5 px-5">Slutt</label>
                    <div className="d-flex w-50">
                    <input type='time' name="eventStart" className="form-control p-2 w-25" value={formData.eventStart} onChange={handleChange} />
                        <input type='time' name="eventSlutt" className="form-control p-2 w-25" value={formData.eventSlutt} onChange={handleChange} />

                    </div>

                    <div className='d-inline-flex gap-1 px-0 my-4'>
                        
                        {loading ? (
                            <button className="btn btn-success px-5" disabled>
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Sending...
                            </button>
                        ) : (
                            <button className="btn btn-success px-5" type="submit" onClick={sendData}>Create Event</button>
                        )}

                        <a className="btn btn-danger px-4" href='/'>Cancel</a>
                    </div>


                    

                    {success && (
                        <div className="alert alert-success alert-dismissible my-4" role="alert">
                            <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={() => {setError(false)}}></button>
                            Event created successfully!
                        </div>  
                    )}

                    {error && (
                        <div className="alert alert-danger alert-dismissible my-4" role="alert">
                            <button type="button" class="btn-close" data-bs-dismiss="alert" onClick={()  => setSuccess(false)}></button>
                            Error occurred while creating the event.
                        </div>
                    )}


                   </form>
                </div>
            </div>
        </>
    );
}

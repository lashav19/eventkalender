import { useEffect, useState } from "react"


export default function SelectedEvent({id}){
    const [events, setEvents] = useState([])
    const [errors, setErrors] = useState(false)
   
    useEffect(() => {
        console.log("event id: ", id);
        fetch(`/api/events?i=${id}`)
          .then(response => response.json())
          .then(data => {
            if (typeof data === 'object' && data !== null) {
              const eventsArray = Object.values(data); // Convert object values to array
              console.log(data)
              setEvents(eventsArray); // Set the fetched data into the component state
            } else {
              console.error('Fetched data is not an object:', data);
            }
          })
          .catch(error => {
            console.info('Error fetching events:\n', error);
            setErrors(true)
          });
      }, []);


    return (
        <>
        
        <h1>Event</h1>
        <div className="container"  >
            <div className="p-4 rounded-3">
              <form action="">
                <div>
                <label htmlFor="eventType" className="mx-3"><p className="form-label h4">Type</p></label>
                <input type="text" disabled="true" placeholder={events[0]} className="rounded-3 form-control p-4 " name="eventType"/>
                </div>
                <div>
                <label htmlFor="eventPlace" className="mx-3"><p className="h4">Plass</p></label>
                <input type="text" disabled="true" placeholder={events[1]} className="rounded-3 form-control p-4" name="eventPlace"/>
                </div>
              </form>
            </div>
            
        </div>
        {errors ? <><h2 className='m-5'>An error has occured</h2></> : false}
        </>
    )
}
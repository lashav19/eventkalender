import React, { useEffect, useState } from 'react';
import EventCard from '../Modules/EventCard'; // Adjust the import path accordingly

export default function FetchEvents() {
  const [events, setEvents] = useState([]);
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    fetch('http://127.0.0.1:3001/api/events')
      .then(response => response.json())
      .then(data => {
        if (typeof data === 'object' && data !== null) {
          const eventsArray = Object.values(data); // Convert object values to array
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
      {events.map(event => (
        <EventCard
        key={event.id} // Assuming each event has a unique id, use it as the key
        text={event.name} // Assigning the event name to text prop
        place={event.place} // Assigning the event place to place prop
        />
      ))}
      {errors ? <><h2 className='m-5'>An error has occured</h2></> : false}

    </>
  );
}

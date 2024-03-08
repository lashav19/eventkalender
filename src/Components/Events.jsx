import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import EventCard from '../Modules/EventCard'; // Adjust the import path accordingly
import Logger from 'simple-console-logger';
Logger.configure({level: 'debug'});

export default function FetchEvents() {
  const [events, setEvents] = useState([]);
  const [errors, setErrors] = useState(false)

  useEffect(() => {

    fetch('/api/events',)
      .then(response => response.json())
      .then(data => {
        if (typeof data === 'object' && data !== null) {
          const eventsArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
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
      <div className="container">
      {events.map(event => (
        <>
         <EventCard
        key={event.id}
        text={event.name} // Assigning the event name to text prop
        place={event.place} // Assigning the event place to place prop
        date={event.dato}
        start={event.start}
        end={event.slutt}
        />
    
        </>
      ))}
      {errors ? <><h2 className='m-5'>An error has occured</h2></> : false}
      </div>

    </>
  );
}

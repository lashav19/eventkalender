import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faClock, faLocationDot, faX,  } from '@fortawesome/free-solid-svg-icons'



export default function EventCard(
    {"text": header, 
    "place": place, 
    "description": description,
    "date": date,
    "start": start,
    "end": end
}){

    return (
        <>
        <div className="container shadow rounded-4 p-5 mt-5 mx-5 eventcard text-body">
            <h2 className='h1'>{header}</h2>
            <h3><FontAwesomeIcon icon={faLocationDot} className='h4 my-0'/> {place}</h3>
             <p>{description}</p>
            <p>{date ? <FontAwesomeIcon icon={faCalendar}/> : <FontAwesomeIcon icon={faX}/>} {date ? date : "Ingen dato"}</p>
            <p> {start || end ? <FontAwesomeIcon icon={faClock}/> : <FontAwesomeIcon icon={faX}/>} {start ? start : "ingen start tid"} - {end ? end : "ingen slutt tid"}</p>
        </div>
        </>
    )
}
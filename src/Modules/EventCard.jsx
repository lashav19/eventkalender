export default function EventCard({"text": header, "place": place, "description": description}){
    return (
        <>
        <div className="container shadow rounded-4 w-25 p-5 mt-5 mx-5 eventcard w-100">
            <h2>{header}</h2>
            <h3>{place}</h3>
             <p>{description}</p>

        </div>
        </>
    )
}
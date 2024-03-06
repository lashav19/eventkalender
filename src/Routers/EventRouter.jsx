import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SelectedEvent from "../Components/SelectedEvent";
import NavBar from "../Modules/NavBar"

export default function EventRouter(){
    const navigate = useNavigate()
    const { id } = useParams(); // Extract id parameter from URL
    return (
        <>
        <NavBar/>
            <div className="container my-5 text-center">
                <SelectedEvent id={id}/>
            </div>
        </>
    )
}
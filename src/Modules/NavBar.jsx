export default function NavBar(){
    return(
        <>
        <nav className="navbar navbar-expand-sm bg-light">

        <div className="container-fluid">

        <ul className="navbar-nav">
            <li className="nav-item mx-3">
                <p className="h2">Event Kalender</p>
            </li>
        </ul>
        <ul class="navbar-nav float-right">
        <li className="nav-item float-right">
            <a className="nav-link" href="#">Hovedside</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Lag event</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Link 3</a>
            </li>
        </ul>
        </div>

        </nav>
        </>
    )
}
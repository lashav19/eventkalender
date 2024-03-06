

export default function NavBar(){



    return(
        <>
        <nav className="navbar navbar-expand bg-secondary">

        <div className="container-fluid">

        <ul className="navbar-nav">
            <li className="nav-item mx-3">
                <p className="h2 text-light">Event Kalender</p>
            </li>
        </ul>
        <ul className="navbar-nav float-right">
        <li className="nav-item float-right">
            <a className="nav-link text-light" href="/">Hovedside</a>
            </li>
            <li className="nav-item">
            <a className="nav-link text-light" href="/create">Lag event</a>
            </li>
        </ul>
        </div>

        </nav>
        </>
    )
}
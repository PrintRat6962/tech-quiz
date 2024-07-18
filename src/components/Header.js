import react from "react"
import rocket from "../images/rocket.png"

export default function Header() {
    return (
        <nav>
            <div className="header-container">
                <img src={rocket} alt="logo"></img>
                <div className="nav-links">
                    <a className="navlink">Schedule</a>
                    <a className="navlink">About Us</a>
                    <a className="navlink">Contact</a>
                </div>
            </div>
        </nav>
    )
}
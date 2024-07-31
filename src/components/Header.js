import react from "react"
import rocket from "../images/rocket.png"
import borgar from "../images/Hamburger-Icon.png"
import arrow from "../images/arrow.png"
import ex from "../images/ex.png"

export default function Header() {
    function openNav() {
        document.getElementById("side").style.display = "flex";
        document.getElementById("borg").style.display = "none";
        document.getElementById("ex").style.display = "block";
    }

    function closeNav() {
        document.getElementById("side").style.display = "none";
        document.getElementById("borg").style.display = "block";
        document.getElementById("ex").style.display = "none";
    }

    return (
        <nav>
            <div className="header-container">
                <img src={rocket} alt="logo"></img>

                <div className="nav-links">
                    <a className="navlink">Schedule</a>
                    <a className="navlink">About Us</a>
                    <a className="navlink">Contact</a>
                </div>

                <div className="borgar">
                    <img id="borg" onClick={openNav} src={borgar}></img>
                    <img id="ex" onClick={closeNav} style={{display: "none"}} src={ex}></img>
                </div>
            </div>

            <div id="side" className="sidebar">
                <div className="side-item">
                    <a className="sidelink">Schedule</a>
                    <img src={arrow}></img>
                </div>

                <div className="side-item">
                    <a className="sidelink">About Us</a>
                    <img src={arrow}></img>
                </div>

                <div className="side-item">
                    <a className="sidelink">Contact</a>
                    <img src={arrow}></img>
                </div>
            </div>
        </nav>
    )
}
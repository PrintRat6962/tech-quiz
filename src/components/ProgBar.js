import react from "react"

export default function ProgBar(props) {
    let data = props
    return (
        <div className="prog-container">
            <div className="prog-sec">
                <span className="percText">40% Done</span>
                <div className="progress">
                    <span style={{width: "40%"}}></span>
                </div>
            </div>
        </div>
    )
}
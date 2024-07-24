import react from "react"

export default function ProgBar({ completeCount }) {
    const progressPercent = (completeCount/12) * 100;
    const wholePercent = Math.floor(progressPercent)

    return (
        <div className="prog-container">
            <div className="prog-sec">
                <span className="percText">{`${wholePercent}% Done`}</span>
                <div className="progress">
                    <span style={{ width: `${wholePercent}%` }}></span>
                </div>
            </div>
        </div>
    );
}
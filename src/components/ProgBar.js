import react from "react"

export default function ProgBar({ completeCount }) {
    const progressPercent = (completeCount/12) * 100;
    const wholePercent = Math.floor(progressPercent)

    return (
        <div className="w-[85%] h-14 mx-auto mt-6 flex justify-end">
            <div className="w-[40%] mr-6 flex justify-end text-prog-gray font-display text-2xl items-center">
                <span className="percText">{`${wholePercent}% Done`}</span>
                <div className="w-[60%] h-8 rounded-2xl bg-progress-color ml-4 relative">
                    <span style={{ width: `${wholePercent}%` }}></span>
                </div>
            </div>
        </div>
    );
}
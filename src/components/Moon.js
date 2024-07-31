import react from "react";

export default function Moon() {
    return (
        <div className="bg-moon bg-center bg-cover h-[480px] w-screen flex items-center
                        justify-center">
            <div className="text-white font-display font-bold w-[85%]">
                <h2 className="text-4xl">Shoot for the Moon</h2>
                <button className="font-display text-white bg-button-blue border-none h-10 w-[120px]">Learn More</button>
            </div>
        </div>
    )
}
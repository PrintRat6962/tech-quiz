import react from "react";
import TaskBox from "./TaskBox";

export default function TaskCont(props) {
    let data = props
    return (
        <div className="task-con">
           {Array.from({ length: 3 }).map((_, index) =>(
                <TaskBox
                    num = {index + (data.rep * 3)} 
                />
            ))}
        </div>
    )
}
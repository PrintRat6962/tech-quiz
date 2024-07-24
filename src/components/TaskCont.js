import React from "react";
import TaskBox from "./TaskBox";

export default function TaskCont( {setCompleteCount} ) {
    const [completedCount, setCompletedCount] = React.useState(0);

    function handleToggleCompleted(completed) {
        setCompletedCount(prevCount => completed ? prevCount + 1 : prevCount - 1);
        setCompleteCount(prevCount => completed ? prevCount + 1 : prevCount - 1)
    }

    return (
        <div className="task-con">
            {Array.from({ length: 12 }).map((_, index) => (
                <TaskBox
                    key={index}
                    num={index}
                    onToggleCompleted={handleToggleCompleted}
                />
            ))}
        </div>
    );
}
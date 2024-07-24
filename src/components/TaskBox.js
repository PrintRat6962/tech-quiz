import React from "react";

export default function TaskBox({ num, onToggleCompleted }) {
    const [completed, setCompleted] = React.useState(false);
    
    const styles = {
        backgroundColor: completed ? '#CCCCCC' : '#5AC8FA'
    };

    function toggleCompleted() {
        setCompleted(prevCompleted => !prevCompleted);
        onToggleCompleted(!completed); // Notify parent of toggle
    }

    let comp = "Done";
    let incomp = "Mark as Done";

    return (
        <div className="todo-item">
            <span>Todo Task {num + 1}</span>
            <button style={styles} onClick={toggleCompleted}>{completed ? comp : incomp}</button>
        </div>
    );
}
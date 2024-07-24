import React from "react";

export default function TaskBox(props) {
    let data = props

    //The passed prop data from the TaskCont
    const [completed, setCompleted] = React.useState(false)
    
    const styles = {
        backgroundColor: completed ? '#CCCCCC' : '#5AC8FA'
    }

    function toggleCompleted() {
        setCompleted(prevCompleted => !prevCompleted)
    }

    let comp = "Done"
    let incomp = "Mark as Done"

    return (
        <div className="todo-item">
            <span>Todo Task {data.num + 1}</span>
            <button style={styles} onClick={() => toggleCompleted()}>{completed ? comp : incomp}</button>
        </div>
    )
}
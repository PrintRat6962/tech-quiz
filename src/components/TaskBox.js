import React from "react";

export default function TaskBox(props) {
    let data = props
    return (
        <div className="todo-item">
            <span>Todo Task {data.num + 1}</span>
            <button>Mark as Done</button>
        </div>
    )
}
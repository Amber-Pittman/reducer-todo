import React from "react";

const TodoList = ({ task }) => {
    return (
        <div>
            <h2> {task.item} </h2>
        </div>
    )
}

export default TodoList;


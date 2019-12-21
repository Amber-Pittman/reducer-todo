import React from "react";
//import { dispatch } from "rxjs/internal/observable/range";

const TodoList = ({ task, dispatch }) => {

    return (
        <div className="item" onClick={ () => 
          dispatch({ type: "TOGGLE_COMPLETED", payload: task})} >
            {task.completed ? 
                <h2 className="completed"> {task.item} </h2> : 
                <h2 className=""> {task.item} </h2> 
            }
        </div>
    )
}

export default TodoList;


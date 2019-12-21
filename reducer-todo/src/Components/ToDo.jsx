import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducers/reducer";
import TodoList from "./TodoList";

 function ToDo() {
    const [newTask, setNewTask] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = e => {
        setNewTask(e.target.value);
    }

    // Build a function that will dispatch an action to add a new todo
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_TASK', payload: newTask });
        setNewTask('');
    }

    const handleComplete = e => {
        e.preventDefault();
        dispatch({ type: "REMOVE_COMPLETE"})
    }


    return (
    <div>
        <div className="tasks">
            {state.todoTasks.map((task, index) => (
                <TodoList task={task} 
                          key={index} 
                          dispatch={dispatch} 
                />
            ))}
        </div>
            <form onSubmit={handleSubmit}>
                <input
                type='text' 
                name='newTask' 
                placeholder='Add a task'
                value={newTask} 
                onChange={handleChange}
                />
                <button type='submit' className="addBtn">Add</button>
            </form>
            <button onClick={handleComplete} className="delete">Delete</button>
    </div>
    )
};

export default ToDo;

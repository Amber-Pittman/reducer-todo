import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducers/reducer";
import TodoList from "./TodoList";

export default function ToDo() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [newTask, setNewTask] = useState("");

    const handleChange = e => {
        setNewTask(e.target.value);
    }

    // Build a function that will dispatch an action to add a new todo
    const handleSubmit = e => {
        e.preventDefault();
        setNewTask("");
        dispatch({ type: "ADD_TASK", payload: newTask});
    }

    return (
        <div>
      {state.todoTasks.map((task, index) => (
        <TodoList task={task} key={index} />
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type='text' name='newTask' placeholder='Add a task'
          value={newTask} onChange={handleChange}
        />
        <button type='submit'>Add</button>
      </form>
    </div>
    )
}
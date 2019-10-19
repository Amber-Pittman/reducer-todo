import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducers/reducer";

export default function ToDo() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>This is the ToDo Component</h2>
        </div>
    )
}
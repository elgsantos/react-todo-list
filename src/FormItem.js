import React from "react";
export function FormItem(props) {
    const handleFormSubmit = event => {
        event.preventDefault();
        let task = document.getElementById('newTask').value
        props.onAddTask(task);
    };
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input id="newTask" name="newTask" placeholder="Add Task"></input>
                <button>Add</button>
            </form>
        </div>
    )
}
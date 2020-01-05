import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TodoList } from "./TodoList";
import { FormItem } from "./FormItem";

class App extends Component {
	state = {
		searchForTask: ''
	}
	constructor(props) {
		super(props);
		this.todolist = React.createRef();
	}
	newTask = (name) => {
		this.todolist.current.addTask(name);
	};
	render() {
		const handleFormSubmit = (event) => {
			event.preventDefault()
			const inputValue = document.getElementById('search-input').value;
			this.setState({
				searchForTask: inputValue
			});
		}
		return (
			<div>
				<form onSubmit={handleFormSubmit}>
					<input id="search-input" placeholder="Search for tasks"></input>
					<button>Search</button>
				</form>
				<TodoList ref={this.todolist} searchFor={this.state.searchForTask.toLowerCase()} />
				<FormItem onAddTask={this.newTask} />
			</div>
		);
	}
}

export default App;

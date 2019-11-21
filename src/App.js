import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TodoList } from "./TodoList";
import { FormItem } from "./FormItem";

class App extends Component {
	constructor(props) {
		super(props);
		this.todolist = React.createRef();
	}
	newTask = (name) => {
		this.todolist.current.addTask(name);
	};
	render() {
		return (
			<div>
				<TodoList ref={this.todolist} />
				<FormItem onAddTask={this.newTask} />
			</div>
		);
	}
}

export default App;

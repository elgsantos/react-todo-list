import React, { Component } from "react";
import { TodoListItem } from "./TodoListItem";
export class TodoList extends Component {
	state = {
		searchFor: "",
		listTitle: "",
		taskItems: [
			{
				id: 1,
				name: "Task 1",
				status: "pending"
			},
			{
				id: 2,
				name: "Task 2",
				status: "pending"
			},
			{
				id: 3,
				name: "Task 3",
				status: "pending"
			}
		]
	}

	componentDidUpdate(prevProps) {
		if (prevProps.searchFor.toLowerCase() !== this.props.searchFor.toLowerCase()) {
			this.setState({
				searchFor: this.props.searchFor
			});
		}
	}

	addTask(name) {
		let task = {
			id: this.state.taskItems.length + 1,
			name,
			status: "pending"
		}
		this.setState({ taskItems: [...this.state.taskItems, task] });
	}
	render() {
		const handleToggleCompleted = (taskId, event) => {
			this.setState({
				taskItems: this.state.taskItems.map(task => {
					if (task.id === taskId) {
						return { ...task, status: event.target.checked ? "completed" : "pending" }
					}
					return task;
				})
			})
		}
		if (this.state.searchFor !== "") {
			return (
				<div>
					<h1>{this.state.listTitle}</h1>
					<ul>
						{this.state.taskItems
							.filter((task) => task.name.toLowerCase().search(this.props.searchFor) >= 0)
							.map(task => (
								<li key={task.id} id={`item-${task.id}`}>
									<TodoListItem onToggleCompleted={handleToggleCompleted} {...task} />
								</li>
							))}
					</ul>
				</div>
			);
		} else {
			return (
				<div>
					<h1>{this.state.listTitle}</h1>
					<ul>
						{
							this.state.taskItems
								.map(task => (
									<li key={task.id} id={`item-${task.id}`}>
										<TodoListItem onToggleCompleted={handleToggleCompleted} {...task} />
									</li>
								))}
					</ul>
				</div>
			);
		}
	}
}

import React from "react";
import PropTypes from "prop-types";
export function TodoListItem(props) {
	return (
		<div>
			<input type="checkbox" onChange={(event) => props.onToggleCompleted(props.id, event)} />
			<b style={{ textDecoration: props.status === "completed" ? "line-through" : "none" }} >
				{props.name}
			</b>
		</div>
	);
}

TodoListItem.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	status: PropTypes.string,
	onToggleCompleted: PropTypes.func
};

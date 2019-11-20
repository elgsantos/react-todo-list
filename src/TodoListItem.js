import React from "react";
import PropTypes from "prop-types";
export function TodoListItem(props) {
	return (
		<div>
			<b>{props.name}</b>
			<button onClick={() => props.onShowTaskName(props.name)}>
				Alert
			</button>
		</div>
	);
}

TodoListItem.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	status: PropTypes.string,
	onShowTaskName: PropTypes.func
};

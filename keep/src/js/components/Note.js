import React, { Component } from "react";

class ConnectedNote extends Component {

	handleChange(event) {
		this.props.updateNote({details: event.target.value, id: this.props.note.id});
	}

	render() {
		return (
			<div>
				<input
					type="text"
					className="form-control"
					id="text"
					value={this.props.note.details}
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}
	
const Note = connect(mapStateToProps, mapDispatchToProps)(ConnectedNote);

export default Note;


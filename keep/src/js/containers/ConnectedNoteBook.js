import React from "react";
import { connect } from "react-redux";
import NoteBook from "../components/NoteBook";
import { updateNote } from "../actions/index";

const mapStateToProps = (state, ownProps) => {
	return { 
		notes: state.notes,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		updateNote: note => dispatch(updateNote(note))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteBook);


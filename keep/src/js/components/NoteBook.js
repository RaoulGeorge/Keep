import React from "react";
import { connect } from "react-redux";
import Note from "./Note";

const mapStateToProps = state => {
	return { notes: state.notes };
};

const ConnectedNoteBook = ({notes}) => (
	<div>
		{notes.map(note => (
			<Note key={ note.id } details={ note } />
		))}
	</div>
);

const NoteBook = connect(mapStateToProps)(ConnectedNoteBook);

export default NoteBook;


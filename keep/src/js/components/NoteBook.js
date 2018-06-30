import React from "react";
import { connect } from "react-redux";
import Note from "./Note";

const NoteBook = ({notes, updateNote}) => (
	<div>
		{notes.map(note => (
			<Note 
				key={ note.id } 
				details={ note } 
				onChange={() => updateNote(note)}/>
		))}
	</div>
);

export default NoteBook;


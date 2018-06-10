import { UPDATE_NOTE } from "../constants/action-types";

const initialState = {
	notes: [{ details : '1', id: 1},{ details : '2', id: 2},{ details : '3', id: 3}]
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NOTE: 
			return {
				...state,
				notes: state.notes.map(
					(note, i) => note.id == action.payload.id ? {...note, details: action.payload.details}
															  : note
				)
			};
		default:
			return state;
	}
};

export default rootReducer;
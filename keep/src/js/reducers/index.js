import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
	notes: [{ details : '1', id: 1},{ details : '2', id: 2},{ details : '3', id: 3}]
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ARTICLE: 
			return { ...state, articles : [ ...state.articles, action.payload]};
		default:
			return state;
	}
};

export default rootReducer;
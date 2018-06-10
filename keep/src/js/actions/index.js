import { UPDATE_NOTE } from "../constants/action-types";
import { ADD_ARTICLE } from "../constants/action-types";

export const addArticle = article => ({ 
	type: ADD_ARTICLE, 
	payload: article 
});

export const updateNote = note => ({ 
	type: UPDATE_NOTE, 
	payload: note 
});
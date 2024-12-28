import { useCallback, useMemo, useReducer } from 'react';
import { tagReducer, TagState, TagActions } from '../reducers/tagReducer';
import { Tag } from '../types';

const initialState: TagState = { tags: [] };

export const useTagState = () => {
	const [state, dispatch] = useReducer(tagReducer, initialState);

	const addTag = useCallback((tag: Tag) => {
		dispatch({ type: TagActions.ADD_TAG, payload: tag });
	}, []);

	const removeTag = useCallback((tag: Tag) => {
		dispatch({ type: TagActions.REMOVE_TAG, payload: tag });
	}, []);

	const tags = useMemo(() => state.tags, [state.tags]);

	return {
		tags,
		addTag,
		removeTag,
	};
};

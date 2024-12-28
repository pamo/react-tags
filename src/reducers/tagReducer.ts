export interface TagState {
	tags: string[];
}

export enum TagActions {
	ADD_TAG = 'ADD_TAG',
	REMOVE_TAG = 'REMOVE_TAG',
}

export type TagAction =
	| { type: TagActions.ADD_TAG; payload: string }
	| { type: TagActions.REMOVE_TAG; payload: string };

export const tagReducer = (state: TagState, action: TagAction): TagState => {
	switch (action.type) {
		case TagActions.ADD_TAG:
			return {
				...state,
				tags: [...state.tags, action.payload],
			};
		case TagActions.REMOVE_TAG:
			return {
				...state,
				tags: state.tags.filter((tag) => tag !== action.payload),
			};
		default:
			return state;
	}
};

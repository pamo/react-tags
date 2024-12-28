import React from 'react';
import { TagInput } from './TagInput';
import { TagList } from './TagList';
import { useTagState, useTagDispatch } from '../../contexts/TagContext';

export function TagForm() {
	const tags = useTagState();
	const { addTag } = useTagDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const tag = formData.get('tag') as string;
		if (tag && !tags.includes(tag)) {

			addTag(tag);
		}
		event.currentTarget.reset();
	};

	return (
		<div>
			<form autoComplete="off" onSubmit={handleSubmit}>
				<TagInput />
			</form>
			<TagList />
		</div>
	)
}

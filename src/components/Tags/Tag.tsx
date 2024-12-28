import React from 'react';
import { useTagContext } from '../../contexts/TagContext';

interface TagChipProps {
	tag: string;
}

export function TagChip({ tag }: TagChipProps) {
	const { removeTag } = useTagContext();
	return (
		<div className="bg-blue-500 text-white px-3 py-1 rounded-full flex items-center">
			<span>{tag}</span>
			<button
				type="button"
				className="ml-2 text-white"
				onClick={() => removeTag(tag)}
			>
				&times;
			</button>
		</div>
	);
};


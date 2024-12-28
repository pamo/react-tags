import React from 'react';

interface TagProps {
	tag: string;
	onRemove: (tag: string) => void;
}

export const TagChip: React.FC<TagProps> = ({ tag, onRemove }) => {
	return (
		<div className="bg-blue-500 text-white px-3 py-1 rounded-full flex items-center">
			<span>{tag}</span>
			<button
				type="button"
				className="ml-2 text-white"
				onClick={() => onRemove(tag)}
			>
				&times;
			</button>
		</div>
	);
};


import React from 'react';

interface TagInputProps {
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export function TagInput({ onKeyDown }: TagInputProps) {
	return <input
			type="text"
			name="tag"
			className="border border-gray-300 p-2 rounded w-full min-w-[400px]"
			placeholder="Enter a tag and press enter"
			onKeyDown={onKeyDown}
		/>
}

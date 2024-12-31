import React from 'react';

export function TagInput() {
	return <input
			type="text"
			name="tag"
			className="border border-gray-300 p-2 rounded w-full min-w-[400px]"
			placeholder="Enter a tag and press enter"
		/>
}

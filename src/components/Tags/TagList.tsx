import React from 'react';
import { TagChip } from './Tag';
import { useTagState } from '../../contexts/TagContext';

export function TagList () {
  const tags = useTagState();
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <TagChip key={index} tag={tag}/>
      ))}
    </div>
  );
};

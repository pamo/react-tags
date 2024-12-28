import React from 'react';
import { TagChip } from './Tag';
import { useTagContext } from '../../contexts/TagContext';

export function TagList () {
  const {tags} = useTagContext();
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <TagChip key={index} tag={tag}/>
      ))}
    </div>
  );
};

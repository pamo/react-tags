import React from 'react';
import { TagChip } from './Tag';

interface TagListProps {
  tags: string[];
  onRemove: (tag: string) => void;
}

export const TagList: React.FC<TagListProps> = ({ tags, onRemove }) => {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <TagChip key={index} tag={tag} onRemove={onRemove} />
      ))}
    </div>
  );
};

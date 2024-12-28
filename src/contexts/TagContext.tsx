import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { useTagState } from '../hooks/useTagState';
import { Tag } from '../types';

const initialState: Tag[] = [];

const TagContext = createContext<{
  tags: Tag[];
  addTag: (tag: string) => void;
  removeTag: (tag: string) => void;
}>({
  tags: initialState,
  addTag: () => undefined,
  removeTag: () => undefined,
});

export const TagProvider = ({ children }: { children: ReactNode }) => {
  const { tags, addTag, removeTag } = useTagState();
  const value = { tags, addTag, removeTag };
  return (
    <TagContext.Provider value={value}>
      {children}
    </TagContext.Provider>
  );
};

export const useTagContext = () => {
  const context = useContext(TagContext);
  if (!context) {
    throw new Error('useTagContext must be used within a TagProvider');
  }
  return context;
};

import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { useTagStateReducer } from '../hooks/useTagStateReducer';
import { Tag } from '../types';

const TagStateContext = createContext<Tag[] | undefined>(undefined);
const TagDispatchContext = createContext<{
  addTag: (tag: string) => void;
  removeTag: (tag: string) => void;
} | undefined>(undefined);

export const TagProvider = ({ children }: { children: ReactNode }) => {
  const { tags, addTag, removeTag } = useTagStateReducer();
    return (
      <TagStateContext.Provider value={tags}>
        <TagDispatchContext.Provider value={{ addTag, removeTag }}>
          {children}
        </TagDispatchContext.Provider>
      </TagStateContext.Provider>
    );
};

export const useTagState = () => {
  const context = useContext(TagStateContext);
  if (!context) {
    throw new Error('useTagState must be used within a TagProvider');
  }
  return context;
};

export const useTagDispatch = () => {
  const context = useContext(TagDispatchContext);
  if (context === undefined) {
    throw new Error('useTagDispatch must be used within a TagProvider');
  }
  return context;
};

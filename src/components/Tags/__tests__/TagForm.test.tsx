import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TagProvider } from './../../../contexts/TagContext';
import { TagForm } from './../TagForm';

describe('TagForm', () => {
  it('renders the form and allows adding and removing tags', () => {
    render(
      <TagProvider>
        <TagForm />
      </TagProvider>
    );

    // Check if the input is rendered
    const input = screen.getByPlaceholderText('Enter a tag and press enter');
    expect(input).toBeInTheDocument();

    // Add a tag
    fireEvent.change(input, { target: { value: 'test tag' } });
    fireEvent.submit(input);

    // Check if the tag is added
    expect(screen.getByText('test tag')).toBeInTheDocument();

    // Remove the tag
    const removeButton = screen.getByText('×');
    fireEvent.click(removeButton);

    // Check if the tag is removed
    expect(screen.queryByText('test tag')).not.toBeInTheDocument();
  });
});

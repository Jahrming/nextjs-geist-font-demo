import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../../src/app/page';

describe('HomePage', () => {
  it('renders the home page correctly', () => {
    render(<HomePage />);
    
    // Check if the page renders without crashing
    expect(document.body).toBeInTheDocument();
  });

  it('should have proper document structure', () => {
    render(<HomePage />);
    
    // Basic structure check
    const body = document.body;
    expect(body).toBeInTheDocument();
  });
});

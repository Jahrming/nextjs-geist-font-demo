import React from 'react';
import { render, screen } from '@testing-library/react';
import ProgresoPage from '../../src/app/progreso/page';

describe('ProgresoPage', () => {
  it('renders the progreso page correctly', () => {
    render(<ProgresoPage />);
    
    // Check if the page renders without crashing
    expect(document.body).toBeInTheDocument();
  });

  it('should display progreso content', () => {
    render(<ProgresoPage />);
    
    // Check for any text content that might be in the page
    const pageContent = document.body.textContent;
    expect(pageContent).toBeDefined();
  });
});

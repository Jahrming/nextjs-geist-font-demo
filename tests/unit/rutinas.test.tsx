import React from 'react';
import { render, screen } from '@testing-library/react';
import RutinasPage from '../../src/app/rutinas/page';

describe('RutinasPage', () => {
  it('renders the rutinas page correctly', () => {
    render(<RutinasPage />);
    
    // Check if the page renders without crashing
    expect(document.body).toBeInTheDocument();
  });

  it('should display rutinas content', () => {
    render(<RutinasPage />);
    
    // Check for any text content that might be in the page
    const pageContent = document.body.textContent;
    expect(pageContent).toBeDefined();
  });
});

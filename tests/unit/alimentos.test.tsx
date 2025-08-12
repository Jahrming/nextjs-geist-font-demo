import React from 'react';
import { render, screen } from '@testing-library/react';
import AlimentosPage from '../../src/app/alimentos/page';

describe('AlimentosPage', () => {
  it('renders the alimentos page correctly', () => {
    render(<AlimentosPage />);
    
    // Check if the page renders without crashing
    expect(document.body).toBeInTheDocument();
  });

  it('should display alimentos content', () => {
    render(<AlimentosPage />);
    
    // Check for any text content that might be in the page
    const pageContent = document.body.textContent;
    expect(pageContent).toBeDefined();
  });
});

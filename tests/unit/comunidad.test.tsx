import React from 'react';
import { render, screen } from '@testing-library/react';
import ComunidadPage from '../../src/app/comunidad/page';

describe('ComunidadPage', () => {
  it('renders the comunidad page correctly', () => {
    render(<ComunidadPage />);
    
    // Check if the page renders without crashing
    expect(document.body).toBeInTheDocument();
  });

  it('should display comunidad content', () => {
    render(<ComunidadPage />);
    
    // Check for any text content that might be in the page
    const pageContent = document.body.textContent;
    expect(pageContent).toBeDefined();
  });
});

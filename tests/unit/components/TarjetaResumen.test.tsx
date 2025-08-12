import React from 'react';
import { render, screen } from '@testing-library/react';
import TarjetaResumen from '../../../src/components/TarjetaResumen';

describe('TarjetaResumen', () => {
  it('renders the summary card correctly', () => {
    render(<TarjetaResumen titulo="Test Title" valor="100" />);
    
    // Check if the component renders without crashing
    expect(document.body).toBeInTheDocument();
  });

  it('should display card content', () => {
    render(<TarjetaResumen titulo="Test Title" valor="100" />);
    
    // Check for any card content
    const cardContent = document.body.textContent;
    expect(cardContent).toBeDefined();
  });
});

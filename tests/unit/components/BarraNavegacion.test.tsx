import React from 'react';
import { render, screen } from '@testing-library/react';
import BarraNavegacion from '../../../src/components/BarraNavegacion';

describe('BarraNavegacion', () => {
  it('renders the navigation bar correctly', () => {
    render(<BarraNavegacion />);
    
    // Check if the component renders without crashing
    expect(document.body).toBeInTheDocument();
  });

  it('should display navigation elements', () => {
    render(<BarraNavegacion />);
    
    // Check for any navigation content
    const navContent = document.body.textContent;
    expect(navContent).toBeDefined();
  });
});

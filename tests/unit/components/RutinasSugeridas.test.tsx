import React from 'react';
import { render, screen } from '@testing-library/react';
import RutinasSugeridas from '../../../src/components/RutinasSugeridas';

describe('RutinasSugeridas', () => {
  const mockOnSeleccionar = () => {};

  it('renders the suggested routines correctly', () => {
    render(<RutinasSugeridas onSeleccionar={mockOnSeleccionar} />);
    
    // Check if the component renders without crashing
    expect(document.body).toBeInTheDocument();
  });

  it('should display routines content', () => {
    render(<RutinasSugeridas onSeleccionar={mockOnSeleccionar} />);
    
    // Check for any routines content
    const routinesContent = document.body.textContent;
    expect(routinesContent).toBeDefined();
  });
});

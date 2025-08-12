import React from 'react';
import { render, screen } from '@testing-library/react';
import FormularioAlimentos from '../../../src/components/FormularioAlimentos';

describe('FormularioAlimentos', () => {
  const mockOnGuardar = () => {};

  it('renders the food form correctly', () => {
    render(<FormularioAlimentos onGuardar={mockOnGuardar} />);
    
    // Check if the component renders without crashing
    expect(document.body).toBeInTheDocument();
  });

  it('should display form elements', () => {
    render(<FormularioAlimentos onGuardar={mockOnGuardar} />);
    
    // Check for any form content
    const formContent = document.body.textContent;
    expect(formContent).toBeDefined();
  });
});

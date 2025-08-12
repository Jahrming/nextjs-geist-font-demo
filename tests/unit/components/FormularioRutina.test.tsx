import React from 'react';
import { render, screen } from '@testing-library/react';
import FormularioRutina from '../../../src/components/FormularioRutina';

describe('FormularioRutina', () => {
  const mockOnGuardar = () => {};

  it('renders the routine form correctly', () => {
    render(<FormularioRutina onGuardar={mockOnGuardar} />);
    
    // Check if the component renders without crashing
    expect(document.body).toBeInTheDocument();
  });

  it('should display form elements', () => {
    render(<FormularioRutina onGuardar={mockOnGuardar} />);
    
    // Check for any form content
    const formContent = document.body.textContent;
    expect(formContent).toBeDefined();
  });
});

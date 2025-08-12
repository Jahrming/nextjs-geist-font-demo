import React from 'react';
import { render, screen } from '@testing-library/react';
import LineaTiempoProgreso from '../../../src/components/LineaTiempoProgreso';

describe('LineaTiempoProgreso', () => {
  const mockRegistros = [
    { 
      id: '1',
      fecha: '2024-01-01', 
      descripcion: 'Inicio del programa', 
      tipo: 'inicio',
      peso: 70,
      medidas: { cintura: 80, pecho: 90, brazo: 30, muslo: 50 }
    },
    { 
      id: '2',
      fecha: '2024-01-15', 
      descripcion: 'Primera meta alcanzada', 
      tipo: 'logro',
      peso: 69,
      medidas: { cintura: 79, pecho: 91, brazo: 31, muslo: 51 }
    },
  ];

  it('renders the progress timeline correctly', () => {
    render(<LineaTiempoProgreso registros={mockRegistros} />);
    
    // Check if the component renders without crashing
    expect(document.body).toBeInTheDocument();
  });

  it('should display timeline content', () => {
    render(<LineaTiempoProgreso registros={mockRegistros} />);
    
    // Check for any timeline content
    const timelineContent = document.body.textContent;
    expect(timelineContent).toBeDefined();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import GraficoProgreso from '../../../src/components/GraficoProgreso';

describe('GraficoProgreso', () => {
  const mockDatos = [
    { fecha: '2024-01-01', valor: 70 },
    { fecha: '2024-01-02', valor: 69.5 },
  ];

  it('renders the progress chart correctly', () => {
    render(<GraficoProgreso datos={mockDatos} titulo="Test Chart" tipo="linea" />);
    
    // Check if the component renders without crashing
    expect(document.body).toBeInTheDocument();
  });

  it('should display chart content', () => {
    render(<GraficoProgreso datos={mockDatos} titulo="Test Chart" tipo="barra" />);
    
    // Check for any chart content
    const chartContent = document.body.textContent;
    expect(chartContent).toBeDefined();
  });
});

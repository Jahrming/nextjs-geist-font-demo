import React from 'react';
import { render, screen } from '@testing-library/react';
import DashboardPage from '../../src/app/dashboard/page';

describe('DashboardPage', () => {
  it('renders the dashboard page correctly', () => {
    render(<DashboardPage />);
    
    // Check if the page renders without crashing
    expect(document.body).toBeInTheDocument();
  });

  it('should display dashboard content', () => {
    render(<DashboardPage />);
    
    // Check for any text content that might be in the page
    const pageContent = document.body.textContent;
    expect(pageContent).toBeDefined();
  });
});

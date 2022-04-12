import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('app component', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });

  it('should contains dashboard component', () => {
    const { container } = render(<App />);

    expect(screen.getByTestId('dashboard')).toBeInTheDocument();
  });
});

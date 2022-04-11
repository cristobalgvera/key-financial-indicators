import { render } from '@testing-library/react';
import { App } from './App';

describe('app component', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });
});

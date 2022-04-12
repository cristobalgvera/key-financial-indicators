import { render } from '@testing-library/react';
import { AppDashboard } from '.';

describe('app dashboard', () => {
  it('should render properly', () => {
    const { container } = render(<AppDashboard />);
    expect(container).toBeInTheDocument();
  });
});

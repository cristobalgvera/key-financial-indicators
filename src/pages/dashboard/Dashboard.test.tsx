import { render, screen } from '@shared/lib/test';
import { AppDashboard } from '.';

describe('app dashboard', () => {
  it('should render properly', () => {
    const { container } = render(<AppDashboard />);
    expect(container).toBeInTheDocument();
  });

  it('should contain indicators section', () => {
    render(<AppDashboard />);

    expect(screen.getByTestId('financial-indicators')).toBeInTheDocument();
  });
});

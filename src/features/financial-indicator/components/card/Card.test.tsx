import { render } from '@testing-library/react';
import { FinancialIndicatorCard } from '.';

describe('financial indicator card', () => {
  it('should render card correctly', () => {
    const { container } = render(<FinancialIndicatorCard />);
    expect(container).toBeInTheDocument();
  });
});

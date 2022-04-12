import { render } from '@testing-library/react';
import { FinancialIndicators } from '.';

describe('financial indicators', () => {
  it('should render properly', () => {
    const { container } = render(<FinancialIndicators />);
    expect(container).toBeInTheDocument();
  });
});

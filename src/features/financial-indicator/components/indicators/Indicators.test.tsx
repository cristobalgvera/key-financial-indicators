import { getDummyIndicator } from '@shared/lib/test';
import { render, screen } from '@testing-library/react';
import { FinancialIndicators } from '.';

describe('financial indicators', () => {
  it('should render properly', () => {
    const { container } = render(<FinancialIndicators indicators={[]} />);
    expect(container).toBeInTheDocument();
  });

  it('should contain one card for each financial indicator provided', () => {
    const expected = [...Array(10).keys()].map(() => getDummyIndicator());

    render(<FinancialIndicators indicators={expected} />);

    const actual = screen.getAllByTestId('financial-indicator-card');

    expect(actual).toHaveLength(expected.length);
  });
});

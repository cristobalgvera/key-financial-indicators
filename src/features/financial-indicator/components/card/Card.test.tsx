import { getDummyIndicator } from '@shared/lib/test';
import { render } from '@testing-library/react';
import { FinancialIndicatorCard } from '.';

describe('financial indicator card', () => {
  it('should render card correctly', () => {
    const { container } = render(
      <FinancialIndicatorCard indicator={getDummyIndicator()} />,
    );
    expect(container).toBeInTheDocument();
  });
});

import { screen, render } from '@testing-library/react';
import { Layout } from './Layout';

describe('layout', () => {
  it('should render properly', () => {
    const { container } = render(<Layout>Children</Layout>);
    expect(container).toBeInTheDocument();
  });

  it('should render children component', () => {
    const { container } = render(
      <Layout>
        <h1 data-testid="children">Children</h1>
      </Layout>,
    );

    const expected = screen.getByTestId('children');

    expect(container).toContainElement(expected);
  });
});

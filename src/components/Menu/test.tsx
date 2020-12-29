import { render, screen } from '@testing-library/react';

import Menu from '.';

describe('<Menu />', () => {
  it('should render the heading', (m) => {
    const { container } = render(<Menu />);

    expect(
      screen.getByRole('heading', { name: /react avançado/i }),
    ).toBeInTheDocument();
  });
});

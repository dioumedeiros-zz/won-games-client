import { render, screen } from '@testing-library/react';

import Logo from '.';

describe('<Logo />', () => {
  it('should render the heading', (m) => {
    const { container } = render(<Logo />);

    expect(
      screen.getByRole('heading', { name: /react avançado/i }),
    ).toBeInTheDocument();
  });
});

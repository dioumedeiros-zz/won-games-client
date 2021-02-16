import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import Menu from '.';

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument();
  });

  it('should render the open/close mobile menu', () => {
    renderWithTheme(<Menu />);

    //Selecionar o elemento MenuFull
    const fullMenuElement = screen.getByRole('navigation', { hidden: true });

    //Verificar se o menu está escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });

    //Clicar no botão de abrir o meni e verificar se abriu
    fireEvent.click(screen.getByLabelText(/open menu/i));
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false');
    expect(fullMenuElement).toHaveStyle({ opacity: 1 });

    //Clicar no botão de fechar o menu e verificar se ele fechou
    fireEvent.click(screen.getByLabelText(/close menu/i));
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });
  });

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />);

    expect(screen.getByText(/log in now/i)).toBeInTheDocument();
    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
    expect(screen.queryByText(/My account/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Wishlist/i)).not.toBeInTheDocument();
  });

  it('should show whislist and account when logged in', () => {
    renderWithTheme(<Menu username="Diou" />);

    expect(screen.getByText(/My account/i)).toBeInTheDocument();
    expect(screen.getByText(/Wishlist/i)).toBeInTheDocument();
    expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument();
  });
});

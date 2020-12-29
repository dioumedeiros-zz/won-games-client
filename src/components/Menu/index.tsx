import { Menu2 as MenuIcon } from 'styled-icons/remix-fill';
import {
  ShoppingCart as ShoppingCartIcon,
  Search as SearchIcon,
} from 'styled-icons/material-outlined';

import Logo from '../Logo';
import * as S from './styles';

const Menu = () => (
  <S.Wrapper>
    <S.IconWrapper>
      <MenuIcon />
    </S.IconWrapper>
    <S.LogoWrapper>
      <Logo hideOnMobile />
    </S.LogoWrapper>
    <S.MenuGroup>
      <S.IconWrapper>
        <SearchIcon />
      </S.IconWrapper>
      <S.IconWrapper>
        <ShoppingCartIcon />
      </S.IconWrapper>
    </S.MenuGroup>
  </S.Wrapper>
);

export default Menu;

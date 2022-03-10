import styled, { css } from 'styled-components';
import { HeaderProps } from '.';

export const Container = styled.header<HeaderProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(173deg, #ee4c77 0%, #0d0430 300%);
  min-height: 151px;
  position: relative;
  padding: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  z-index: 10;

  ${({ currentScroll }) =>
    currentScroll >= 110 &&
    document.body.scrollHeight > 1170 &&
    css`
      position: fixed;
      min-height: auto;
      height: fit-content;
      top: 20px;
      width: 50%;
      align-self: center;
      border-radius: 10px;
      background: linear-gradient(
        173deg,
        rgba(238, 76, 119, 0.5) 0%,
        #0d0430 300%
      );

      div {
        bottom: 0;
        border: none;
      }

      @media (max-width: 768px) {
        width: 90%;
      }
    `}
`;

import { TextFieldProps } from './index';
import styled, { css } from 'styled-components';

export const Container = styled.div<TextFieldProps>`
  border-bottom: 0.6px solid ${({ theme }) => theme.colors['charcoal-grey']};
  display: flex;
  align-items: center;
  width: 100%;
  transition: border 0.15s ease-in-out;

  ${({ isError }) =>
    isError &&
    css`
      border-color: ${({ theme }) => theme.colors['neon-red']};

      & svg:last-child {
        color: ${({ theme }) => theme.colors['neon-red']};
      }
    `}

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primaryColor};
  }

  svg {
    color: ${({ theme }) => theme.colors.primaryColor};
    font-size: 2.3rem;
  }

  .password-visibility {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors['black-54']};
  }

  input {
    border: none;
    outline: none;
    font-size: 21.9px;
    letter-spacing: -0.31px;
    font-family: ${({ type }) =>
      type === 'password' ? 'LucidaGrande' : 'Roboto'};
    color: ${({ theme }) => theme.colors['charcoal-grey-two']};
    padding: 5px 10px;
    background-color: transparent;
    width: 100%;
  }

  /* Cor de fundo do autocomplete */
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.beige} inset;
    -webkit-text-fill-color: ${({ theme }) =>
      theme.colors['charcoal-grey-two']};
  }

  input:-webkit-autofill::first-line {
    font-size: inherit;
  }
`;

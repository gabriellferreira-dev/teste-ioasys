import styled, { css } from 'styled-components';

type Props = {
  isSearching: boolean;
};

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  right: 0;
  max-width: 60px;
  width: 100%;
  transition: 0.1s ease-in-out;
  position: absolute;

  ${({ isSearching }) =>
    isSearching &&
    css`
      border-bottom: 1px solid #fff;
      position: relative;
      align-self: flex-end;
      padding: 10px;
      max-width: 95%;
      right: auto;
    `}

  button {
    background-color: transparent;
    border: none;
    outline: none;
    color: #fff;
    display: flex;
    align-items: center;

    svg {
      font-size: 40px;
    }
  }

  input {
    font-family: Roboto;
    font-size: 34px;
    background-color: transparent;
    border: none;
    outline: none;
    color: #fff;
    padding: 5px 10px;
    width: 100%;
    display: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.rouge};
    }

    ${({ isSearching }) =>
      isSearching &&
      css`
        display: block;
      `}
  }

  .cancel-search {
    color: #fff;
    font-size: 34px;
    display: none;

    ${({ isSearching }) =>
      isSearching &&
      css`
        display: block;
      `}
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  -webkit-backdrop-filter: blur(1px);
  backdrop-filter: blur(1px);
  background-color: rgba(255, 255, 255, 0.6);
  width: 100%;
  height: 100vh;
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    width: 132px;
    height: 132px;
    border: 10px solid transparent;
    border-top-color: ${({ theme }) => theme.colors['greeny-blue']};
    border-radius: 50%;
    animation: spinner 1s infinite;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

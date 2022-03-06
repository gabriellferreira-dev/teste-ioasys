import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  padding: 18px;
  background-color: ${({ theme }) => theme.colors['greeny-blue']};
  color: ${({ theme }) => theme.colors['white-two']};
  border: none;
  border-radius: 3.9px;
  font-family: GillSans;
  font-size: 19.3px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
`;

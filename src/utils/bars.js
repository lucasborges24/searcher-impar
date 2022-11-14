import styled from 'styled-components';

export const VerticalBar = styled.div`
  width: 2px;
  height: ${({ height }) => height};
  background-color: #f0eff0;
`;

export const HorizontalBar = styled.div`
  width: ${({ width }) => width};
  height: 1px;
  background-color: #f0eff0;
  margin: ${({ margin }) => margin};
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 16em);
  height: 100%;
  background-color: #f6f4f6;
`;

export const Content = styled.div`
  max-width: 1046px;
  width: 100%;
  /* height: 100em; */
  padding: 1.5em;
  /* background-color: red; */

  @media (min-width: 1046px) {
    padding: 1em 0;
  }
`;

export const NewCardButton = styled.div`
  /* background-color: green; */
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: -webkit-sticky;
  position: sticky;
  top: 16em;
  background-color: #f6f4f6;
  z-index: 1;
  p {
    font: normal normal normal 32px/40px Muli;
    color: var(--cor-primaria);
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
`;

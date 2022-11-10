import styled from 'styled-components';

export const Container = styled.div`
  height: 16em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Head = styled.header`
  height: 4em;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1em;

  position: absolute;
  left: 0;
  top: 0;

  background: transparent linear-gradient(272deg, var(--cor-secundaria) 0%, var(--cor-primaria) 100%) 0% 0% no-repeat
    padding-box;
  opacity: 1;
  box-shadow: 0px 3px 6px #00000029;

  @media (min-width: 640px) {
    justify-content: flex-start;
  }
`;

export const HeadSearcher = styled.div`
  height: 16em;
  width: 100%;
  background: transparent url(${({ src }) => src}) 0% 0% no-repeat padding-box;
  object-fit: cover;

  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0 1em 2em 1em;

  input {
    font: normal normal 300 24px/30px Muli;
    color: #757575;
  }

  @media (min-width: 1046px) {
    padding: 0 0 2em 0;
  }

  @media (min-width: 1440px) {
    background-repeat: round;
  }
`;

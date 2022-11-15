import styled from 'styled-components';

export const Img = styled.div`
  width: 159px;
  height: 159px;
  background: ${({ type }) => (type === 'delete' ? '#DB25250F' : '#ED6C020F')} 0% 0% no-repeat padding-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  background-color: img {
    width: 64px;
    height: 63px;
  }

  border: 6px solid #e4e4e4;
  border-radius: 50%;
  opacity: 1;
`;

export const DialogTitle = styled.div`
  font: normal normal bold 32px/40px Muli;
  letter-spacing: 0px;
  color: ${({ type }) => (type === 'delete' ? '#db2525' : '#ed6c02')};
  opacity: 1;
  text-transform: capitalize;
  margin-top: 25px;
`;

export const DialogSubTitle = styled.div`
  font: normal normal bold 12px/15px Muli;
  letter-spacing: 0px;
  color: #454545;
  text-transform: uppercase;
  opacity: 1;
  margin: 10px 0;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  /* height: 430px; */
  padding: 0 35px;
  /* width: 100%; */

  @media (min-width: 642px) {
    width: 450px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px 33px 40px;
  width: 100%;

  button {
    margin: 0 10px;
  }

  @media (min-width: 642px) {
    padding: 10px 40px 33px 40px;
  }
`;

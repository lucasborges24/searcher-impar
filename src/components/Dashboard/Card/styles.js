import styled from 'styled-components';

export const Container = styled.div`
  width: 234px;
  height: 267px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #e5e5e5;
  border: 1px solid #e4e4e4;
  border-radius: 8px;
  opacity: 1;
  margin-bottom: 30px;
`;

export const Data = styled.div`
  height: 85%;
  padding: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;
export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 15%;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 3px 6px #0000000f;
  border-radius: 0px 0px 8px 8px;
  opacity: 1;
  font-family: normal normal normal 15px/19px Muli;

  button span {
    opacity: 0.52;
    margin-left: 10px;
    text-transform: capitalize;
  }

  button:last-child {
    margin-right: 15px;
  }

  button:first-child {
    margin-left: 15px;
  }
`;

export const Img = styled.div`
  width: 95px;
  height: 95px;
  background: #f6f4f6 0% 0% no-repeat padding-box;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 64px;
    height: 63px;
  }

  border: 1px solid #e4e4e4;
  border-radius: 50%;
  opacity: 1;
`;

export const Title = styled.div`
  font-family: normal normal normal 16px/20px Muli;
  letter-spacing: 0px;
  color: #263238;
  opacity: 1;
  text-align: center;
  text-transform: capitalize;
`;

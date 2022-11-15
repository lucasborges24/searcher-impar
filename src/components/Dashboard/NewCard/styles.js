import { TextField } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  @media (min-width: 642px) {
    width: 642px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin: 40px 30px;
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  color: var(--cor-primaria);
  text-align: left;
  font: normal normal bold 32px/40px Muli;
  letter-spacing: 0px;
  opacity: 1;

  img {
    width: 46px;
    height: 46px;
    margin-right: 18px;
  }
`;

export const Label = styled.p`
  font: normal normal bold 14px/18px Muli;
  letter-spacing: 0px;
  color: #454545;
  text-transform: uppercase;
  opacity: 1;
  margin: 12px 0;
`;

export const CssTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    marginBottom: '50px',
    borderRadius: '8px',
    height: '60px',
    '&:hover fieldset': {
      borderColor: '#454545',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#5F1478',
    },
  },
});

export const UploadButton = styled.div`
  position: relative;
  text-align: left;
  font: normal normal bold 18px/23px Muli;
  letter-spacing: 0px;
  color: #e76316;
  opacity: 1;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #e763162e;
  border: 1px solid #e76316;
  border-radius: 8px;
  width: 100px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: 0.3ms ease-in-out;

  :hover {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  }

  input[type='file'] {
    position: absolute;
    z-index: -1;
    width: 2px;
  }

  label {
    text-align: center;
    width: 100%;
    cursor: pointer;
    font: normal normal bold 18px/23px Muli;
  }

  @media (min-width: 642px) {
    width: 224px;

    input[type='file'] {
      position: absolute;
      z-index: -1;
      width: 2px;
    }

    label {
      text-align: center;
      width: 100%;
      cursor: pointer;
      font: normal normal bold 18px/23px Muli;
    }
  }
`;

export const UploadButtonAbsolute = styled.div`
  position: absolute;
  top: 0.35em;
  right: 5px;
  width: 100px;

  @media (min-width: 642px) {
    width: auto;
  }
`;

export const Upload = styled.div`
  position: relative;
  width: 100%;
  min-height: 60px;
  height: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #b9b9b9;
  border-radius: 8px;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 14px;

  p {
    font: normal normal 300 18px/23px Muli;
    letter-spacing: 0px;
    color: #757575;
    opacity: 0.8;
    width: 50%;
  }

  @media (min-width: 642px) {
    p {
      width: auto;
    }
  }
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 25px 0;
`;

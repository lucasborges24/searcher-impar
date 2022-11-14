import { Button, ThemeProvider } from '@mui/material';
import { buttonTheme } from '../../../utils/themes';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { Container, Data, Buttons, Title, Img } from './styles';
import { VerticalBar, HorizontalBar } from '../../../utils/bars';
import { useState } from 'react';
import DialogBox from '../Dialog/Dialog';

export default function Card({ title }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [type, setType] = useState('');

  const handleType = (type) => {
    setIsDialogOpen(true);
    setType(type);
  };

  return (
    <Container>
      <Data>
        <Img>
          <img src="https://pngimg.com/uploads/pokemon/pokemon_PNG112.png" />
        </Img>
        <HorizontalBar width="100%" margin="20px 0"></HorizontalBar>
        <Title>{title}</Title>
      </Data>
      <Buttons>
        <ThemeProvider theme={buttonTheme}>
          <Button color={'editCard'} onClick={() => handleType('delete')}>
            <DeleteOutlineOutlinedIcon color={'newCard'} fontSize={'small'} />
            <span>Excluir</span>
          </Button>
          <VerticalBar height="80%"></VerticalBar>
          <Button color={'editCard'} onClick={() => handleType('edit')}>
            <CreateOutlinedIcon color={'newCard'} fontSize={'small'} />
            <span>Editar</span>
          </Button>
        </ThemeProvider>
      </Buttons>
      <DialogBox setIsDialogOpen={setIsDialogOpen} isDialogOpen={isDialogOpen} type={type} />
    </Container>
  );
}

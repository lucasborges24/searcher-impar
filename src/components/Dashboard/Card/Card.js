import { Button, ThemeProvider } from '@mui/material';
import { buttonTheme } from '../../../utils/themes';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { Container, Data, Buttons, VerticalBar, HorizontalBar, Title, Img } from './styles';

export default function Card({ title }) {
  return (
    <Container>
      <Data>
        <Img>
          <img src="https://pngimg.com/uploads/pokemon/pokemon_PNG112.png" />
        </Img>
        <HorizontalBar></HorizontalBar>
        <Title>{title}</Title>
      </Data>
      <Buttons>
        <ThemeProvider theme={buttonTheme}>
          <Button color={'editCard'}>
            <DeleteOutlineOutlinedIcon color={'newCard'} fontSize={'small'} />
            <span>Excluir</span>
          </Button>
          <VerticalBar></VerticalBar>
          <Button color={'editCard'}>
            <CreateOutlinedIcon color={'newCard'} fontSize={'small'} />
            <span>Editar</span>
          </Button>
        </ThemeProvider>
      </Buttons>
    </Container>
  );
}

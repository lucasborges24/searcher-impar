import { Button, Drawer, ThemeProvider } from '@mui/material';
import { buttonTheme } from '../../../utils/themes';
import { Cards, Container, Content, NewCardButton } from './styles';
import Card from '../Card/Card';
import { useState } from 'react';
import NewCard from '../NewCard/NewCard';
import usePoke from '../../../hooks/api/usePoke';

export default function MainSearch() {
  const [open, setOpen] = useState({ openned: false, type: '', title: '' });
  // const test = useRef(null);
  const { pokes, pokeLoading } = usePoke();

  return (
    <Container>
      <Content>
        <NewCardButton>
          <p>Resultado de busca</p>
          <ThemeProvider theme={buttonTheme}>
            <Button
              variant="contained"
              color="newCard"
              onClick={() => setOpen({ ...open, openned: true, type: 'create' })}
              sx={{ borderRadius: 2 }}
            >
              Novo Card
            </Button>

            <Drawer
              sx={{ bgcolor: '#F6F4F6CC' }}
              anchor="right"
              open={open.openned}
              onClose={() => setOpen({ ...open, openned: false })}
              SlideProps={{ direction: 'left' }}
            >
              <NewCard open={open} setOpen={setOpen} />
            </Drawer>
          </ThemeProvider>
        </NewCardButton>
        <Cards>
          {pokeLoading ? (
            <p>Carregando...</p>
          ) : (
            pokes.results.map((item, i) => {
              return <Card title={item.name} key={i} setNewCard={setOpen} />;
            })
          )}
        </Cards>
      </Content>
    </Container>
  );
}

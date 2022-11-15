import { Button, Drawer, ThemeProvider } from '@mui/material';
import { buttonTheme } from '../../../utils/themes';
import { Cards, Container, Content, NewCardButton } from './styles';
import Card from '../Card/Card';
import { useState } from 'react';
import NewCard from '../NewCard/NewCard';
import usePoke from '../../../hooks/api/usePoke';

export default function MainSearch() {
  const [open, setOpen] = useState({ openned: false, type: '', title: '' });
  const { pokes, pokeLoading } = usePoke(0, 20);
  const { inputFilter, setInputFilter } = useContext(SearchContext);
  const [pokeFiltered, setPokeFiltered] = useState([]);
  const filteredPokes = (inputFilter, pokes) => {
    if (!inputFilter) return pokes;
    const filtered = pokes.results.filter((item) => {
      const step = inputFilter.length;
      const hashcuttedWords = {};
      for (let i = 0; i <= item.name.length - step; i++) {
        const cuttedWord = item.name.slice(i, step + i);
        if (hashcuttedWords[cuttedWord]) continue;
        hashcuttedWords[cuttedWord] = true;
      }
      return hashcuttedWords[inputFilter];
    });
    return { ...pokes, results: filtered };
  };

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

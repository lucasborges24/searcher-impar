import { Button, Drawer, ThemeProvider } from '@mui/material';
import { buttonTheme } from '../../../utils/themes';
import { Cards, Container, Content, NewCardButton } from './styles';
import Card from '../Card/Card';
import { useCallback, useContext, useEffect, useState } from 'react';
import NewCard from '../NewCard/NewCard';
import usePoke from '../../../hooks/api/usePoke';
import SearchContext from '../../../contexts/searchContext';
import InfiniteScroll from 'react-infinite-scroller';
import api from '../../../services/api';
import swal from 'sweetalert';

export default function MainSearch() {
  const [open, setOpen] = useState({ openned: false, type: '', title: '' });
  const [page, setPage] = useState(1);
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

  const loadFunc = useCallback(async () => {
    if (inputFilter) {
      setPokeFiltered(filteredPokes(inputFilter?.toLowerCase(), pokeFiltered));
      return;
    }
    try {
      if (page === 0) {
        setPokeFiltered({ ...pokes });
      } else {
        const { data } = await api.get(`https://pokeapi.co/api/v2/item?offset=${20 * page}&limit=${20}`);
        setPokeFiltered({ ...data, results: [...pokeFiltered.results, ...data.results] });
      }
      setPage(page + 1);
    } catch (error) {
      swal('Um erro aconteceu!', `${error}`, 'error');
    }
  }, [pokeFiltered, inputFilter]);

  useEffect(() => {
    if (pokeLoading) return;
    if (page > 1) {
      setPokeFiltered(filteredPokes(inputFilter?.toLowerCase(), pokeFiltered));
    } else {
      setPokeFiltered(filteredPokes(inputFilter?.toLowerCase(), pokes));
    }
    if (inputFilter) {
      setPage(0);
    }
  }, [inputFilter, pokeLoading]);

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

        <InfiniteScroll
          pageStart={0}
          loadMore={loadFunc}
          hasMore={!pokeLoading && Boolean(pokeFiltered.next) && Boolean(!inputFilter)}
          loader={<div key={0}>Loading ...</div>}
        >
          <Cards>
            {pokeLoading ? (
              <p>Carregando...</p>
            ) : pokeFiltered.results?.length === 0 ? (
              <p>Não houve resultados</p>
            ) : (
              pokeFiltered.results?.map((item, i) => {
                return <Card title={item.name} key={i} setNewCard={setOpen} />;
              })
            )}
          </Cards>
        </InfiniteScroll>
      </Content>
    </Container>
  );
}

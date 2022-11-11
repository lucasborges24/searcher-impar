import { Button, ThemeProvider } from '@mui/material';
import { buttonTheme } from '../../../utils/themes';
import { Cards, Container, Content, NewCardButton } from './styles';
import Card from '../Card/Card';

export default function MainSearch() {
  const arr = returnDataArr();
  console.log(arr.results);

  return (
    <>
      <Container>
        <Content>
          <NewCardButton>
            <p>Resultado de busca</p>
            <ThemeProvider theme={buttonTheme}>
              <Button variant="contained" color="newCard">
                Novo Card
              </Button>
            </ThemeProvider>
          </NewCardButton>
          <Cards>
            {arr.results.map((item, i) => {
              return <Card title={item.name} key={i} />;
            })}
          </Cards>
        </Content>
      </Container>
    </>
  );
}

function returnDataArr() {
  return {
    count: 1607,
    next: 'https://pokeapi.co/api/v2/item/?offset=40&limit=20',
    previous: 'https://pokeapi.co/api/v2/item/?offset=0&limit=20',
    results: [
      {
        name: 'awakening',
        url: 'https://pokeapi.co/api/v2/item/21/',
      },
      {
        name: 'paralyze-heal',
        url: 'https://pokeapi.co/api/v2/item/22/',
      },
      {
        name: 'full-restore',
        url: 'https://pokeapi.co/api/v2/item/23/',
      },
      {
        name: 'max-potion',
        url: 'https://pokeapi.co/api/v2/item/24/',
      },
      {
        name: 'hyper-potion',
        url: 'https://pokeapi.co/api/v2/item/25/',
      },
      {
        name: 'super-potion',
        url: 'https://pokeapi.co/api/v2/item/26/',
      },
      {
        name: 'full-heal',
        url: 'https://pokeapi.co/api/v2/item/27/',
      },
      {
        name: 'revive',
        url: 'https://pokeapi.co/api/v2/item/28/',
      },
      {
        name: 'max-revive',
        url: 'https://pokeapi.co/api/v2/item/29/',
      },
      {
        name: 'fresh-water',
        url: 'https://pokeapi.co/api/v2/item/30/',
      },
      {
        name: 'soda-pop',
        url: 'https://pokeapi.co/api/v2/item/31/',
      },
      {
        name: 'lemonade',
        url: 'https://pokeapi.co/api/v2/item/32/',
      },
      {
        name: 'moomoo-milk',
        url: 'https://pokeapi.co/api/v2/item/33/',
      },
      {
        name: 'energy-powder',
        url: 'https://pokeapi.co/api/v2/item/34/',
      },
      {
        name: 'energy-root',
        url: 'https://pokeapi.co/api/v2/item/35/',
      },
      {
        name: 'heal-powder',
        url: 'https://pokeapi.co/api/v2/item/36/',
      },
      {
        name: 'revival-herb',
        url: 'https://pokeapi.co/api/v2/item/37/',
      },
      {
        name: 'ether',
        url: 'https://pokeapi.co/api/v2/item/38/',
      },
      {
        name: 'max-ether',
        url: 'https://pokeapi.co/api/v2/item/39/',
      },
      {
        name: 'elixir',
        url: 'https://pokeapi.co/api/v2/item/40/',
      },
    ],
  };
}
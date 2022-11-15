import { Container, Head, HeadSearcher, InputBase } from './styles';
import logo from './../../../assets/images/logo-teste/logo-teste.png';
import fundoSearch from '../../../assets/images/fundo-busca/fundo-busca.png';
import styled from 'styled-components';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import { DebounceInput } from 'react-debounce-input';
import { useContext, useEffect, useRef } from 'react';
import SearchContext from '../../../contexts/searchContext';

export default function Header() {
  const { inputFilter, setInputFilter } = useContext(SearchContext);

  const handleSearch = (query) => {
    if (!query) return setInputFilter(null);
    setInputFilter(query);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && inputFilter) setInputFilter(e.target.value);
  };
  
  return (
    <>
      <Container>
        <Head>
          <LogoImg src={logo} />
        </Head>
        <HeadSearcher src={fundoSearch}>
          <Paper
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
            }}
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', maxWidth: 1046, height: 75 }}
          >
            <DebounceInput
              minLength={2}
              debounceTimeout={300}
              onChange={(event) => handleSearch(event.target.value, event)}
              onKeyDown={(event) => handleKey(event)}
              placeholder="Digite aqui sua busca..."
              element={InputBase}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={() => handleSearch(inputFilter)}>
              <Search sx={{ color: grey[400], fontSize: 40 }} />
            </IconButton>
          </Paper>
        </HeadSearcher>
      </Container>
    </>
  );
}

const LogoImg = styled.img`
  background: transparent url(${({ src }) => src}) 0% 0% no-repeat padding-box;
  opacity: 1;
`;

import { Container, Head, HeadSearcher } from './styles';
import logo from './../../../assets/images/logo-teste/logo-teste.png';
import fundoSearch from '../../../assets/images/fundo-busca/fundo-busca.png';
import styled from 'styled-components';
import { Paper, InputBase, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import { grey } from '@mui/material/colors';

export default function Header() {
  return (
    <>
      <Container>
        <Head>
          <LogoImg src={logo} />
        </Head>
        <HeadSearcher src={fundoSearch}>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', maxWidth: 1046, height: 75 }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Digite aqui sua busca..."
              inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
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

import {
  Container,
  Content,
  Label,
  Title,
  CssTextField,
  ButtonBox,
  Upload,
  UploadButton,
  UploadButtonAbsolute,
} from './styles';
import createCardLogo from '../../../assets/images/icone_criar.svg';
import { HorizontalBar } from '../../../utils/bars';
import { Button } from '@mui/material';

export default function NewCard() {
  return (
    <Container>
      <Content>
        <Title>
          <img src={createCardLogo} />
          Criar Card
        </Title>
        <HorizontalBar width="100%" margin="30px 0"></HorizontalBar>
        <Label>Digite um nome para o card</Label>
        <CssTextField id="outlined-basic" fullWidth placeholder="Digite o título" variant="outlined"></CssTextField>
        <Label>INCLUA UMA IMAGEM PARA APARECER NO CARD</Label>

        <Upload>
          <UploadButtonAbsolute>
            <UploadButton>
              <label htmlFor="upload">Escolher arquivo</label>
              <input accept="image/*" id="upload" multiple type="file" />
            </UploadButton>
          </UploadButtonAbsolute>
          <p>Nenhum arquivo selecionado</p>
        </Upload>

        <HorizontalBar width="100%"></HorizontalBar>
        <ButtonBox>
          <Button variant="contained" color="newCard" type="file" sx={{ width: 165, borderRadius: 2 }}>
            Criar Card
          </Button>
        </ButtonBox>
      </Content>
    </Container>
  );
}

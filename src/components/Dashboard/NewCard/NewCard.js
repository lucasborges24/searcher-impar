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
import { useState } from 'react';
import swal from 'sweetalert';

export default function NewCard({ open, setOpen }) {
  const [card, setCard] = useState({ name: open.type === 'create' ? '' : open.title, image: '' });

  const handleFinish = (type) => {
    setOpen({ ...open, openned: false });
    swal('Calma!', 'Esta funcionalidade será implementada em breve', 'info');
  };

  const handleChange = (event) => {
    setCard({ ...card, image: event.target.files[0].name });
  };

  return (
    <Container>
      <Content>
        <Title>
          <img src={createCardLogo} />
          {open.type === 'create' ? 'Criar' : 'Editar'} Card
        </Title>
        <HorizontalBar width="100%" margin="30px 0"></HorizontalBar>
        <Label>Digite um nome para o card</Label>
        <CssTextField
          id="outlined-basic"
          fullWidth
          placeholder="Digite o título"
          value={card.name}
          onChange={(e) => setCard({ ...card, name: e.target.value })}
          variant="outlined"
        ></CssTextField>
        <Label>INCLUA UMA IMAGEM PARA APARECER NO CARD</Label>

        <Upload>
          <UploadButtonAbsolute>
            <UploadButton>
              <label htmlFor="upload">Escolher arquivo</label>
              <input accept="image/*" id="upload" multiple type="file" onChange={handleChange} />
            </UploadButton>
          </UploadButtonAbsolute>
          <p>{card.image === '' ? 'Nenhum arquivo selecionado' : card.image}</p>
        </Upload>

        <HorizontalBar width="100%"></HorizontalBar>
        <ButtonBox>
          <Button
            onClick={() => handleFinish(open.type)}
            variant="contained"
            color="newCard"
            type="file"
            sx={{ width: 165, borderRadius: 2 }}
          >
            {open.type === 'create' ? 'Criar' : 'Editar'} Card
          </Button>
        </ButtonBox>
      </Content>
    </Container>
  );
}

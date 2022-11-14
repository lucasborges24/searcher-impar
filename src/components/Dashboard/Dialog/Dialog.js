import { Button, Dialog, DialogActions, ThemeProvider } from '@mui/material';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Box, Buttons, DialogSubTitle, DialogTitle, Img } from './styles';
import { HorizontalBar } from '../../../utils/bars';
import { buttonTheme } from '../../../utils/themes';
import swal from 'sweetalert';

export default function DialogBox({ type, isDialogOpen, setIsDialogOpen, setNewCard, title }) {
  const handleText = (type) => {
    if (type === 'delete') return 'excluir';
    return 'editar';
  };
  const handleClose = (type, isCancel) => {
    setIsDialogOpen(false);
    if (isCancel) return;
    if (type === 'delete') {
      swal('Calma!', 'Esta funcionalidade será implementada em breve!', 'info');
      return;
    }
    setNewCard({ ...open, openned: true, type: 'edit', title });
  };

  return (
    <Dialog open={isDialogOpen} onClose={handleClose} sx={{ width: '100%' }}>
      <Box>
        <Img type={type}>
          {type === 'delete' ? (
            <DeleteOutlineOutlinedIcon color={'error'} sx={{ fontSize: 75 }} />
          ) : (
            <CreateOutlinedIcon color={'warning'} sx={{ fontSize: 75 }} />
          )}
        </Img>
        <DialogTitle type={type} id="alert-dialog-title">
          {handleText(type)}
        </DialogTitle>
        <DialogSubTitle>Certeza que deseja {handleText(type)}?</DialogSubTitle>
        <HorizontalBar width="100%" margin="22px 0"></HorizontalBar>
      </Box>
      <ThemeProvider theme={buttonTheme}>
        <Buttons>
          <Button
            color={type === 'delete' ? 'error' : 'warning'}
            variant="contained"
            onClick={() => handleClose(type)}
            sx={{ width: 165, height: 48, borderRadius: 2 }}
          >
            {handleText(type)}
          </Button>
          <Button
            color={type === 'delete' ? 'error' : 'warning'}
            variant="outlined"
            onClick={() => handleClose(type, true)}
            sx={{ width: 165, height: 48, borderRadius: 2 }}
          >
            Cancelar
          </Button>
        </Buttons>
      </ThemeProvider>
    </Dialog>
  );
}

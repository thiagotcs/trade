import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<AddBoxIcon />}
        style={{ float: 'right' }}
        onClick={handleOpen}
      >
        Novo CEP
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Cadastro novo CEP.</h2>
            <p id="transition-modal-description">
              <form className={classes.root} noValidate autoComplete="off">
                <p id="transition-modal-description">
                  <Input
                    placeholder="Cep."
                    inputProps={{ 'aria-label': 'description' }}
                    style={{ width: '20rem' }}
                  />
                </p>
                <p id="transition-modal-description">
                  <Input
                    placeholder="Bairro."
                    inputProps={{ 'aria-label': 'description' }}
                    style={{ width: '20rem' }}
                  />
                </p>
                <p id="transition-modal-description">
                  <Input
                    placeholder="Cidade."
                    inputProps={{ 'aria-label': 'description' }}
                    style={{ width: '20rem' }}
                  />
                </p>
                <p id="transition-modal-description">
                  <Input
                    placeholder="Estado."
                    inputProps={{ 'aria-label': 'description' }}
                    style={{ width: '20rem' }}
                  />
                </p>
              </form>
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

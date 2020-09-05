import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';
import SaveIcon from '@material-ui/icons/Save';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import Input from '@material-ui/core/Input';

import api from '../../services/api';
import { logout } from '../../services/auth';

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
  const [values, setValues] = React.useState({});
  const history = useHistory();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setValues({});
  };

  const handleChange = (e) => setValues({ ...values, [e.target.id]: e.target.value });

  const handleBlur = async () => {
    if (values.cep) {
      const { data } = await api.get(`/api/address/search/${values.cep}`);
      setValues({ cep: data.cep, neighborhood: data.neighborhood, city: data.city, state: data.state })
    }
  }

  const handleSubmit = async (e) => {
    try {
      await api.post('/api/address', values);
      handleClose();
    } catch (error) {
      console.log(error);
    }
  }

  const handleLogout = () => {
    logout();
    history.push('/');
  }

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<AddBoxIcon />}
        style={{ float: "right", margin: 20 }}
        onClick={handleOpen}
      >
        Novo CEP
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        style={{ float: "right", margin: 20 }}
        onClick={handleLogout}
      >
        Logout
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
              <form
                onSubmit={handleSubmit}
                className={classes.root}
                noValidate
                autoComplete="off"
              >
                <p id="transition-modal-description">
                  <Input
                    id="cep"
                    placeholder="Cep"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.cep}
                    inputProps={{ "aria-label": "description" }}
                    style={{ width: "20rem" }}
                  />
                </p>
                <p id="transition-modal-description">
                  <Input
                    placeholder="Bairro"
                    id="neighborhood"
                    onChange={handleChange}
                    value={values.neighborhood}
                    inputProps={{ "aria-label": "description" }}
                    style={{ width: "20rem" }}
                  />
                </p>
                <p id="transition-modal-description">
                  <Input
                    placeholder="Cidade"
                    id="city"
                    onChange={handleChange}
                    value={values.city}
                    inputProps={{ "aria-label": "description" }}
                    style={{ width: "20rem" }}
                  />
                </p>
                <p id="transition-modal-description">
                  <Input
                    placeholder="Estado"
                    id="state"
                    onChange={handleChange}
                    value={values.state}
                    inputProps={{ "aria-label": "description" }}
                    style={{ width: "20rem" }}
                  />
                </p>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleClose}
                  className={classes.button}
                  startIcon={<CancelPresentationIcon />}
                >
                  Cancelar
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  className={classes.button}
                  startIcon={<SaveIcon />}
                  style={{ float: "right", width: "9rem" }}
                >
                  Salvar
                </Button>
              </form>
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

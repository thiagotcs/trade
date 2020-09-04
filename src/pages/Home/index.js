import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
// import Button from '@material-ui/core/Button';
// import AddBoxIcon from '@material-ui/icons/AddBox';
import Table from './table';
import Modal from './modal';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <CssBaseline />
      <h1>Ceps Cadastrados</h1>
      <Modal />

      <form className={classes.root} noValidate autoComplete="off">
        <Input
          placeholder="Busque por Cidade ou Cep cadastrado."
          inputProps={{ 'aria-label': 'description' }}
          style={{ width: '20rem' }}
        />
      </form>
      <Table />
    </Container>
  );
}

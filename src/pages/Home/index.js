import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Table from './table';

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
    <Container maxWidth="sm">
      <CssBaseline />
      <h1>Ceps Cadastrados</h1>

      <form className={classes.root} noValidate autoComplete="off">
        <Input
          placeholder="Busque por Cidade ou Cep cadastrado."
          inputProps={{ 'aria-label': 'description' }}
        />
        <Button
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
          startIcon={<AddBoxIcon />}
        >
          Novo CEP
        </Button>
      </form>
      <Table />
    </Container>
  );
}

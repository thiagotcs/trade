import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
// import Button from '@material-ui/core/Button';
// import AddBoxIcon from '@material-ui/icons/AddBox';
import Table from './table';
import Modal from './modal';

export default function Home() {
  return (
    <Container maxWidth="xl">
      <CssBaseline />
      <h1>Ceps Cadastrados</h1>
      <Modal />
      <Table />
    </Container>
  );
}

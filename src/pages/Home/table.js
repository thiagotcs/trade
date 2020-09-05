import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Input from "@material-ui/core/Input";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import api from '../../services/api';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 640,
  },
  title: {
    position: 'absolute',
    bottom: '50%',
    left: '35%',
  }
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [listAddress, setListAddress] = React.useState([]);

  useEffect(() => {
    async function getAllAddress() {
      const { data: { address } } = await api.get('api/address/all');
      setListAddress(address);
    }
    const timeoutId = setInterval(() => getAllAddress(), 2000);

    return () => {
      clearInterval(timeoutId);
    }
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns = [
    {
      id: "cep",
      label: "Cep",
      minWidth: 120,
      align: "left",
      format: (value) => value.toLocaleString("pt-BR"),
    },
    { id: "bairro", label: "Bairro", minWidth: 100, align: "left" },
    { id: "cidade", label: "Cidade", minWidth: 170, align: "left" },
    { id: "uf", label: "Estado", minWidth: 100, align: "left" },
  ];

  function createData(cep, bairro, cidade, uf) {
    return { cep, bairro, cidade, uf };
  }

  const rows = listAddress.length > 0 ? listAddress.map(({ zipCode, neighborhood, city, state }) => createData(zipCode, neighborhood, city, state)) : [];

  if (rows.length === 0) {
    return <div className={classes.title}>Ops! Você não possui endereços cadastrados.</div>
  }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

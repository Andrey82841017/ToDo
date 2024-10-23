// 

import React from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';

export default function Table({ todos, setTodos, updateTodo, deleteTodo }) {
  const rows: GridRowsProp = todos;

  const columns: GridColDef[] = [
    {
      field: 'task',
      headerName: 'Задача',
      width: 250,
      editable: true,
    },
    {
      field: 'action',
      headerName: 'Действие',
      width: 150,
      renderCell: (params) => (
        <>
          {updateTodo && (
            <Button
              variant="contained"
              color="success"
              onClick={() => updateTodo(params.row)}
            >
              Выполнено
            </Button>
          )}
          {deleteTodo && (
            <Button
              variant="contained"
              color="error"
              onClick={() => deleteTodo(params.row)}
            >
              Удалить
            </Button>
          )}
        </>
      ),
    },
  ];

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
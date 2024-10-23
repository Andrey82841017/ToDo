import React from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Button, List, ListItem, ListItemText } from '@mui/material';

export default function Table({ todos, setTodos, updateTodo, deleteTodo}) {
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
       (updateTodo && <Button
          variant="contained"
          color="success"
          onClick={() => updateTodo(params.row)}
        >
          Выполнено
        </Button>)
        (deleteTodo && <Button
          variant="contained"
          color="success"
          onClick={() => deleteTodo(params.row)}
        >
          Удалить
        </Button>)
      ),
    },
  ];


  return (
    <Box sx={{ height: 400, width: '100%' }}>
      {/* <DataGrid
        rows={todos}
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
      /> */}
            <List>
              {todos?.map((todo, index) => (
                <ListItem key={index}>
                  <ListItemText primary={todo.task} />
                  {updateTodo && <Button variant="contained" color="success" onClick={()=>updateTodo(todo)}>
                    Выполнено
                  </Button>}
                  {deleteTodo && <Button variant="contained" color="success" onClick={() => deleteTodo(todo)}>
                    Удалить
                  </Button>}
                </ListItem>
              ))}
            </List>
            
             {/* <List>
              {todos?.map((todo, index) => (
                <ListItem key={index}>
                  <ListItemText primary={todo.task} />
                  <Button variant="contained" color="success" onClick={(hendelDelete)}>
                    Удалить
                  </Button>
                </ListItem>
              ))}
            </List>} */}
        

    </Box>
  );
}
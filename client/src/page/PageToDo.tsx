import React, { useState } from 'react'
import {
  Container,
  TextField,
  Button,
  Typography,
 
  Paper,
  List,
  ListItem,
  ListItemText,
  Box,

} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid'
import Table from '../components/Table';

interface Task {
  task: string;
  isDone: boolean;
  id: number

} 


const initialState:Task[] =JSON.parse(localStorage.getItem('todos') || '[]')
console.log();
export default function  ToDo() {
   const [task, setTask] = useState<string>('');
  const [todos, setTodos] = useState<Task[]>(initialState);
  
 

  const handleAddTask = (e:React.FormEvent<HTMLFormElement>) => {
e.preventDefault () 
const nextTodoState = [...todos, { task, isDone: false, id: Date.now() }]
    setTodos(nextTodoState);

      setTask('');
  localStorage.setItem('todos', JSON.stringify(nextTodoState))
  }



const todoIsDone = todos.filter((task)=> task.isDone === true)
const todoInProgress = todos.filter((task)=> task.isDone === false)

const updateTodo = (todoToUpdate) => {
  const newTodos = todos.map(todo => {
    if (todo.id === todoToUpdate.id) {
      return {...todo, isDone: true}
    }
    return todo
  })
  setTodos(newTodos)
  localStorage.setItem('todos', JSON.stringify(newTodos))
}

const deleteTodo = (todoToDelete) => {
  const clinTodo = todos.filter((todo)=> todo.id !== todoToDelete.id)
  setTodos(clinTodo)
   localStorage.setItem('todos', JSON.stringify(clinTodo))
}

  return (
   <Container style={{ width: '100%' }}>
      <Typography variant="h4" gutterBottom>
        TODO List
      </Typography>
      
      <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
        <Typography variant="h6">Добавить задачу</Typography>
        <TextField
          placeholder="Задача"
          value={task}
              onChange={(e) => setTask(e.target.value)}
              fullWidth
              margin="normal"


        />
  
        <Button disabled={!Boolean(task.length)} onClick={handleAddTask} variant="contained" color="primary">
          Добавить задачу
        </Button>
      </Paper>

      <Box display="flex" justifyContent="space-between">
        <Paper elevation={3} style={{ padding: '16px', width: '48%' }}>
          <Typography variant="h6">Невыполненные задачи</Typography>
         
          <Table todos={todoInProgress} setTodos={setTodos} updateTodo={updateTodo}  />
        </Paper>

        <Paper elevation={3} style={{ padding: '16px', width: '48%' }}>
          <Typography variant="h6">Выполненные задачи</Typography>
        
          <Table  todos={todoIsDone} deleteTodo={deleteTodo} />
        </Paper>
      </Box>
    </Container>
  );
};





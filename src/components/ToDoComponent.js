import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Card, CardContent, CardActions, Button } from '@material-ui/core';

const ToDoComponent = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const addTodo = () => {
        var newTodoId = todos.length;
        var newTodo = "{ \"id\": \"" + newTodoId + "\", \"description\": \"" + input + "\", \"done\": false  }";
        setTodos([...todos, JSON.parse(newTodo)]);
        console.log(newTodo)
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const markTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const todoCard = todos.map((todo) => {
        return (
            <Card style={{
                margin: "15px auto 15px auto",
                minWidth: "200px",
                maxWidth: "400px",
                backgroundColor: "lightgrey",
                alignItems: "center"
            }} id={todo.id} key={todo.id}>
                <CardContent>
                    <h3>{todo.description}</h3>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => deleteTodo(todo.id)}>Delete</Button>
                    <Button size="small" onClick={() => markTodo(todo.id)}>{todo.done ? "Unmark" : "Mark as done"}</Button>
                </CardActions>
            </Card>
        )
    });

    return (
        <div>
            <h2>ToDo's app</h2>
            <form noValidate autoComplete="off" style={{ margin: '20px' }}>
                <TextField id="outlined-basic" label="Add a new ToDo" value={input} onChange={handleChange} variant="outlined" />
            </form>

            <Fab color="primary" size="small" aria-label="add" onClick={addTodo}>
                <AddIcon />
            </Fab>
            <div>
                {todoCard}
            </div>
        </div>
    );
}

export default ToDoComponent;
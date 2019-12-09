import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Card, CardContent, CardActions, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_TODO, DELETE_TODO, MARK_TODO } from "../redux/actions";

const ToDoComponent = () => {
    const todos = useSelector(state => state.todos)
    const dispatcher = useDispatch();
    const [input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const addTodo = () => {
        var newTodoId = 0;
        if (todos.length > 0) {
            newTodoId = Number(todos[todos.length - 1].id) + 1;
        }
        dispatcher({ type: ADD_TODO, payload: { id: newTodoId, description: input } });
    }

    const deleteTodo = (id) => {
        dispatcher({ type: DELETE_TODO, payload: { id: id } });
    }

    const markTodo = (id) => {
        dispatcher({ type: MARK_TODO, payload: { id: id } });
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
import React from 'react';
import {InputGroup, FormControl, Container} from 'react-bootstrap'

const Todo = ({ todo, toggleTodo }) => {

    function handleTodoClick() {
        toggleTodo(todo.id);
    }

    return (
        <Container className="mb-2">
            <InputGroup>
                <InputGroup.Radio checked={todo.complete} onClick={handleTodoClick} />
                <FormControl style={{ "backgroundColor": "#ffffff"}} defaultValue={todo.name} readOnly/>
            </InputGroup>
        </Container>
    );
}

export default Todo;

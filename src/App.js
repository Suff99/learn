import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid'
import useSound from 'use-sound';
import { useState, useRef, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Modal, FormControl } from 'react-bootstrap'

const LOCAL_STORAGE_KEY = 'todoapp.todos'

function App() {

  const [playSound] = useSound(
    '/sounds/done.mp3',
    { volume: 0.25 }
  );

  const [todos, setTodos] = useState([])
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos)
  }, []);


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]);


  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete;
    setTodos(newTodos)
    playSound();
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === '') return;
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
    playSound()
    hideModal()
  }


  const remainingItems = todos.filter(todo => !todo.complete);
  const completedItems = todos.filter(todo => todo.complete);


  const [isOpen, setIsOpen] = useState(false);


  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };


  return (
    <Container>
      <h1>To Do!</h1>
      <FormControl className="shadow-sm bg-body mb-2 rounded container container"
        placeholder="Do the Dishes..."
        ref={todoNameRef}
      />

    <Modal show={isOpen}>
      <Modal.Header>Are you sure?</Modal.Header>
      <Modal.Body>This action will clear all completed items</Modal.Body>
      <Modal.Footer>
      <Button variant="light" onClick={handleClearTodos}>✅</Button>
      <Button variant="light" onClick={hideModal}>❌</Button>
        </Modal.Footer>
    </Modal>

    


      <Button variant="secondary" onClick={handleAddTodo}>Add Todo</Button>
      {' '}
      <Button variant="secondary" onClick={showModal}>Clear Completed Todos</Button>


      <h1>Remaining Items ({remainingItems.length})</h1>
      <TodoList todos={remainingItems} toggleTodo={toggleTodo} />

      <h1>Completed Items ({completedItems.length})</h1>
      <TodoList todos={completedItems} toggleTodo={toggleTodo} />

    </Container>
  );
}

export default App;

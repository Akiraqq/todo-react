import { useMemo, useState } from 'react'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodosActions from './components/Todos/TodosActions'

function App() {
  const localStorageTodosRaw = localStorage.getItem('todos')
  let localStorageTodos = []
  localStorageTodosRaw && (localStorageTodos = JSON.parse(localStorageTodosRaw))
  const [todos, setTodos] = useState(localStorageTodos)

  useMemo(() => {
    localStorage.clear()
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
    localStorageTodos
      ? localStorage.setItem(
          'todos',
          JSON.stringify([...localStorageTodos, newTodo])
        )
      : localStorage.setItem('todos', JSON.stringify([newTodo]))
  }

  const removeTodo = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id))
  }

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      })
    )
  }

  const resetTodosHandler = () => {
    setTodos([])
  }

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm createTodo={createTodo} />
      {!!todos.length && (
        <TodosActions
          completedTodosExist={!!completedTodosCount}
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
        />
      )}
      <TodoList
        todo={todos}
        remove={removeTodo}
        toggleTodo={toggleTodoHandler}
      />
      {!!completedTodosCount && (
        <h2>{`You have completed ${completedTodosCount} ${
          completedTodosCount > 1 ? 'todos' : 'todo'
        }`}</h2>
      )}
    </div>
  )
}

export default App

import { useState } from 'react'
import Button from '../UI/Button'
import styles from './TodoForm.module.css'

const TodoForm = ({ createTodo }) => {
  const [todoItem, setTodoItem] = useState({ text: '' })

  const addNewTodo = (e) => {
    e.preventDefault()
    const newTodo = {
      ...todoItem,
      id: Date.now(),
      isCompleted: false,
    }
    newTodo.text && createTodo(newTodo)
    setTodoItem({ text: '' })
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={addNewTodo}>
        <input
          type="text"
          placeholder="Enter new todo"
          value={todoItem.text}
          onChange={(e) => setTodoItem({ ...todoItem, text: e.target.value })}
        />
        <Button type="submit" title="Submit">
          Submit
        </Button>
      </form>
    </div>
  )
}
export default TodoForm

import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import styles from './Todo.module.css'
import { useState } from 'react'
const Todo = ({ todo, remove, toggleTodo }) => {
  const [active, setActive] = useState(false)
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiTodoFill className={styles.todoIcon} onClick={() => setActive(true)} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => remove(todo)}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={() => toggleTodo(todo.id)}
      />
      <div
        onClick={() => setActive(false)}
        className={
          active ? `${styles.modal} ${styles.active}` : `${styles.modal}`
        }
      >
        <div
          className={
            active
              ? `${styles.modal__content} ${styles.active}`
              : `${styles.modal__content}`
          }
        >
          {todo.text}
        </div>
      </div>
    </div>
  )
}
export default Todo

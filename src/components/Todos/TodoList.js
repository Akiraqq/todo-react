import Todo from './Todo'
import styles from './TodoList.module.css'
const TodoList = ({ todo, remove, toggleTodo }) => {
  return (
    <div className={styles.todoListContainer}>
      {!todo.length && <h2>Todo list is empty</h2>}
      {todo.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          remove={remove}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  )
}
export default TodoList

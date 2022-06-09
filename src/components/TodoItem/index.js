import './index.css'

const TodoItem = props => {
  const {onDeleteTodo, todoList} = props
  const {title, id} = todoList
  const onDelete = () => {
    onDeleteTodo(id)
  }
  return (
    <li className="list">
      <div className="container">
        <p className="title">{title}</p>
        <button type="button" className="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem

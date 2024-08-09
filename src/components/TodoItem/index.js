import './index.css'

const TodoItem = props => {
  const {todoTask, onDelete} = props
  const {id, title} = todoTask
  const deletes = () => {
    onDelete(id)
  }
  return (
    <li className="todo_items">
      <p>{title}</p>
      <div>
        <button onClick={deletes} className="buttons" type="button">
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem

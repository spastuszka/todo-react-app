import styles from './ToDoItem.module.css'

export function ToDoItem({ name, done }) {
  return (
    <li>
      <span>{name}</span>
      {!done && <button>Zrobione</button>}
      <button>Usuń</button>
    </li>
  )
}

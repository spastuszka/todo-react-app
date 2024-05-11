import { Button } from '../Button/Button'
import styles from './ToDoItem.module.css'

export function ToDoItem({ name, done }) {
  return (
    <li>
      <span>{name}</span>
      {!done && <Button>Zrobione</Button>}
      <Button>Usuń</Button>
    </li>
  )
}

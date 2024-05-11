import { Button } from '../Button/Button'
import styles from './ToDoItem.module.css'

export function ToDoItem({ name, done }) {
  return (
    <li className={styles.item}>
      <span className={styles.name}>{name}</span>
      {!done && <Button>Zrobione</Button>}
      <Button>Usuń</Button>
    </li>
  )
}

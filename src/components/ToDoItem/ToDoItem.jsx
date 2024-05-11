import { Button } from '../Button/Button'
import styles from './ToDoItem.module.css'

export function ToDoItem({ name, done, onDeleteButtonClick }) {
  return (
    <li className={styles.item}>
      <span className={`${styles.name} ${done ? styles.done : ''}`}>
        {name}
      </span>
      {!done && <Button>Zrobione</Button>}
      <Button onClick={onDeleteButtonClick}>Usuń</Button>
    </li>
  )
}

import { Button } from '../Button/Button'
import styles from './Form.module.css'

export function Form({ onFormSubmit }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onFormSubmit()
      }}
      className={styles.form}
    >
      <input className={styles.input} type="text" />
      <Button>Dodaj</Button>
    </form>
  )
}

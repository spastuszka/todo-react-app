import styles from './Form.module.css'

export function Form() {
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" />
      <button className={styles.button}>Dodaj</button>
    </form>
  )
}

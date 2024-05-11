import { useState } from 'react'
import { Button } from '../Button/Button'
import styles from './Form.module.css'

export function Form({ onFormSubmit }) {
  const [inputValue, setInputValue] = new useState('')

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onFormSubmit(inputValue)
      }}
      className={styles.form}
    >
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={styles.input}
        type="text"
      />
      <Button>Dodaj</Button>
    </form>
  )
}

import { useState } from 'react'
import styles from './App.module.css'
import { Form } from './components/Form/Form'
import { ToDoItem } from './components/ToDoItem/ToDoItem'
import { getSubHeading } from './utils/getSubHeading'

function App() {
  const [isFormShown, setIsFormShown] = new useState(false)

  const [todos, setTodos] = useState([
    { name: 'Zapłacić rachunki', done: false, id: 1 },
    { name: 'Wyrzycić śmieci', done: true, id: 2 },
  ])

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>Do zrobienia</h1>
          <h2>{getSubHeading(todos.length)}</h2>
        </div>
        {!isFormShown && (
          <button
            onClick={() => setIsFormShown(true)}
            className={styles.button}
          >
            +
          </button>
        )}
      </header>
      {isFormShown && (
        // prevTodos - funkcja aktualizująca, biorąca stary stan tablicy
        <Form
          onFormSubmit={(newToDoName) => {
            setTodos((prevTodos) => [
              ...prevTodos,
              { name: newToDoName, done: false, id: prevTodos.length + 1 },
            ])
            setIsFormShown(false)
          }}
        />
      )}
      <ul>
        {todos.map(({ id, name, done }) => (
          <ToDoItem key={id} name={name} done={done} />
        ))}
      </ul>
    </div>
  )
}

export default App

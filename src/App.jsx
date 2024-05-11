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

  function addItem(newToDoName) {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        name: newToDoName,
        done: false,
        id: prevTodos.length > 0 ? prevTodos.at(-1).id + 1 : 0,
      },
    ])
    setIsFormShown(false)
  }

  function deleteItem(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  function finishItem(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id !== id) {
          return todo
        }
        return { ...todo, done: true }
      })
    )
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>TODO APP</h1>
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
        <Form onFormSubmit={(newToDoName) => addItem(newToDoName)} />
      )}
      <ul>
        {todos.map(({ id, name, done }) => (
          <ToDoItem
            key={id}
            name={name}
            done={done}
            onDeleteButtonClick={() => deleteItem(id)}
            onDoneButtonClick={() => finishItem(id)}
          />
        ))}
      </ul>
    </div>
  )
}

export default App

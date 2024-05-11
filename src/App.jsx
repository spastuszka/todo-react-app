import styles from './App.module.css'
import { Form } from './components/Form/Form'
import { ToDoItem } from './components/ToDoItem/ToDoItem'

function getSubHeading(numberOfTasks) {
  switch (true) {
    case numberOfTasks > 4:
      return `${numberOfTasks} zadań`
    case numberOfTasks > 1:
      return `${numberOfTasks} zadania`
    case numberOfTasks === 1:
      return `1 zadanie`
    default:
      return 'Brak zadań'
  }
}

function App() {
  const todos = [
    { name: 'Zapłacić rachunki', done: false, id: 1 },
    { name: 'Wyrzycić śmieci', done: true, id: 2 },
  ]
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>Do zrobienia</h1>
          <h2>5 zadań</h2>
        </div>
        <button className={styles.button}>+</button>
      </header>
      <Form />
      <ul>
        {todos.map(({ id, name, done }) => (
          <ToDoItem key={id} name={name} done={done} />
        ))}
      </ul>
    </div>
  )
}

export default App

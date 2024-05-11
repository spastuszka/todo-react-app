import styles from './App.module.css'
import { Form } from './components/Form/Form'
import { ToDoItem } from './components/ToDoItem/ToDoItem'

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
        {todos.map((todo) => (
          <ToDoItem key={todo.id} name={todo.name} done={todo.done} />
        ))}
      </ul>
    </div>
  )
}

export default App

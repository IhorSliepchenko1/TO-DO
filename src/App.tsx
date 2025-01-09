import { useEffect } from "react"
import AddSection from "./app/components/AddSection/AddSection"
import Container from "./app/components/Container/Container"
import Header from "./app/components/Header/Header"
import { useStoreContext } from "./context/ContextProvider"
import ThemeToggle from "./app/components/ThemeToggle/ThemeToggle"
import LanguageToggle from "./app/components/LanguageToggle/LanguageToggle"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { addTask, deleteTask, updateTask } from "./app/features/todoSlice"

const App = () => {
  const { error, language } = useStoreContext()

  useEffect(() => {
    if (error) {
      alert(`произошла ошибка перевода`)
    }
  }, [error, language])

  const state = useAppSelector((state) => state)
  const dispatch = useAppDispatch()
  console.log(state);

  return (
    <main>
      <nav className="nav-bar">
        <ThemeToggle />
        <LanguageToggle />
      </nav>
      <button onClick={() => dispatch(addTask({
        id: String(1111111111),
        name: `СТАРЫЕ ДАННЫЕ`,
        completed: false,
      }))}>dispatch</button>

      <button onClick={() => dispatch(deleteTask({
        id: `string`,
        name: `string`,
        completed: false,
      }))}>deleteTask</button>

      <button onClick={() => dispatch(updateTask({
        id: String(1111111111),
        name: `ОРЕДАКТИРОВАНИ`,
        completed: false,
      }))}>ОРЕДАКТИРОВАНИ</button>

      <Container>
        <Header />
        <AddSection />
      </Container>
    </main>
  )
}

export default App
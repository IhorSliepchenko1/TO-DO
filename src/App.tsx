import { useEffect } from "react"
import AddSection from "./app/components/AddSection/AddSection"
import Container from "./app/components/Container/Container"
import Header from "./app/components/Header/Header"
import { useStoreContext } from "./context/ContextProvider"
import ThemeToggle from "./app/components/ThemeToggle/ThemeToggle"
import LanguageToggle from "./app/components/LanguageToggle/LanguageToggle"
import { useAppSelector } from "./app/hooks"
import Task from "./app/components/Task/Task"

const App = () => {
  const { data } = useAppSelector(state => state.todo)
  const { error, language } = useStoreContext()

  useEffect(() => {
    if (error) {
      alert(`произошла ошибка перевода`)
    }
  }, [error, language])


  return (
    <main>
      <nav className="nav-bar">
        <ThemeToggle />
        <LanguageToggle />
      </nav>
      <Container>
        <Header />
        <AddSection />
        {
          data.map((item) => (
            <Task title={item.title} key={item.id} />
          ))
        }
      </Container>
    </main>
  )
}

export default App
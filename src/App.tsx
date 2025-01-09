import { useEffect } from "react"
import Container from "./components/Container/Container"
import Header from "./components/Header/Header"
import LanguageToggle from "./components/LanguageToggle/LanguageToggle"
import { useStoreContext } from "./context/ContextProvider"


// Already on 'to-do-UI'
const App = () => {
  const { error, language } = useStoreContext()

  useEffect(() => {
    if (error) {
      alert(`произошла ошибка перевода`)
    }
  }, [error, language])

  return (
    <>
      <LanguageToggle />
      <Container>
        <Header />
      </Container>
    </>
  )
}

export default App
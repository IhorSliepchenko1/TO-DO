import './Header.scss'
import { useStoreContext } from '../../../context/ContextProvider'
import { FcTodoList } from 'react-icons/fc'

const Header = () => {
     const { translations } = useStoreContext()

     return (
          <header className="header-container">
               <h1>{translations.title}</h1>
               <FcTodoList className='icon'/>
          </header>
     )
}

export default Header
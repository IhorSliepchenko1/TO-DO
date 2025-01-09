import { useStoreContext } from '../../../context/ContextProvider'
import './ThemeToggle.scss'

const ThemeToggle = () => {
     const { toggleTheme, theme } = useStoreContext()

     return (
          <label className="switch">
               <input type="checkbox" onChange={toggleTheme} checked={theme === `light`} />
               <span className="slider"></span>
          </label>
     )
}

export default ThemeToggle
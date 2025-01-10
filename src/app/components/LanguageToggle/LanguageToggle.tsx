import { useStoreContext } from '../../../context/ContextProvider'
import './LanguageToggle.scss'


const LanguageToggle = () => {
     const languageList = ["RU", "EN"]
     const { language, languageToggle } = useStoreContext()

     return (
          <select className="language-toggle" name="language" onChange={languageToggle} value={language}>
               {languageList.map((item) => (
                    <option key={item} value={item}>{item}</option>
               ))}
          </select>
     )
}

export default LanguageToggle
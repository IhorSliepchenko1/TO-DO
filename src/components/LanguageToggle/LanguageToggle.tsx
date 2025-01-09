import './LanguageToggle.scss'
import { useStoreContext } from "../../context/ContextProvider"


const LanguageToggle = () => {
     const languageList = ["RU", "EN"]
     const { language, languageToggle } = useStoreContext()


     return (
          <select className="language-toggle" name="language" onChange={languageToggle} value={language}
               style={{
                    background: language === `RU` ? `white` : `teal`,
                    color: language === `RU` ? `black` : `white`
               }}>

               {languageList.map((item) => (
                    <option key={item} value={item}>{item}</option>
               ))}
          </select>
     )
}

export default LanguageToggle
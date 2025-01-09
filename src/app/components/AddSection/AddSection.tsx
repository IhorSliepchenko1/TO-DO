import './AddSection.scss'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { useStoreContext } from '../../../context/ContextProvider'

const AddSection = () => {
     const { translations } = useStoreContext()

     return (
          <section className="add-section">
               <Input placeholder={translations.placeholder} />
               <Button btnText={translations.btnText} />
          </section>
     )
}

export default AddSection
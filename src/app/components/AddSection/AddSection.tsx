import './AddSection.scss'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { useStoreContext } from '../../../context/ContextProvider'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { addTask } from '../../features/todoSlice'

type Data = {
     id: string,
     title: string,
     completed: boolean,
}

const AddSection = () => {
     const { translations } = useStoreContext()
     const { error: addError } = useAppSelector((state) => state.todo)

     const dispatch = useAppDispatch()

     const [task, setTask] = useState<Data>({
          id: '',
          title: '',
          completed: false,
     })
     const [error, setError] = useState<string>('')

     const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setTask(prev => ({ ...prev, [e.target.name]: e.target.value, id: uuidv4() }))
     };

     const validate = () => {
          if (!task.title) {
               setError(translations.required)
               return false
          }
          return true
     }

     const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setError(``)

          if (validate()) {

               if (addError) {
                    setError(addError)
                    return

               } else {
                    dispatch(addTask({ task, translations }))
                    setTask(prev => ({ ...prev, title: '', id: '' }))
               }

          } else {
               return
          }
     }

     useEffect(() => {
          const timer = setTimeout(() => {
               setError(``)
          }, 1500)

          return () => clearTimeout(timer)
     }, [error])

     return (
          <>
               <form className="add-section" onSubmit={onSubmit}>
                    <Input placeholder={translations.placeholder} onChange={onChange} value={task.title} />
                    <Button btnText={translations.btnText} />
               </form>
               {error && <ErrorMessage error={error} />}
          </>
     )
}

export default AddSection
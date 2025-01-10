import './Task.scss'
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import ModalDelete from '../Modals/ModalDelete';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { updateTask } from '../../features/todoSlice';
import { useStoreContext } from '../../../context/ContextProvider';
import { FaCheck } from "react-icons/fa";

type Data = {
     id: string
     title: string
     completed: boolean
}

type Props = {
     title: string,
     id: string,
     checked: boolean,
     data: Data
}

const Task: React.FC<Props> = ({ title, id, checked, data }) => {
     const [open, setOpen] = useState<boolean>(false)
     const [disabled, setDisabled] = useState<boolean>(true)
     const [newTitle, setNewTitle] = useState({ title: '' })
     const { translations } = useStoreContext()
     const dispatch = useAppDispatch()

     const completeTask = (data: Data) => {
          const newData = { ...data, completed: !data.completed }
          dispatch(updateTask({ task: newData, translations }))
     }

     const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setNewTitle(prev => ({ ...prev, [e.target.name]: e.target.value }))
     }

     const updateTitle = () => {
          if (newTitle.title !== data.title) {
               const newData = { ...data, ...newTitle }
               dispatch(updateTask({ task: newData, translations }))
          }
          setDisabled(true)
     }

     return (
          <>
               <div className="task" style={{ background: checked ? `gray` : '' }}>
                    <div className="task__input-container" >
                         <input type="checkbox" checked={checked} onChange={() => completeTask(data)} />
                         <input type="text" defaultValue={title} disabled={disabled} name="title" onChange={onChange} />
                    </div>
                    <div className="task__btn-container">
                         {disabled ?
                              <button className='task__btn-edit' onClick={() => setDisabled(false)}><MdEdit /></button>
                              : <button className='task__btn-save' onClick={updateTitle}><FaCheck /></button>}

                         <button className='task__btn-delete' onClick={() => setOpen(true)}><MdDelete /></button>
                    </div>
               </div>

               {open && <ModalDelete id={id} setOpen={setOpen} />}
          </>
     )
}

export default Task
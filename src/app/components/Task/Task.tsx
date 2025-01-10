import './Task.scss'
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import ModalDelete from '../Modals/ModalDelete';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { updateTask } from '../../features/todoSlice';
import { useStoreContext } from '../../../context/ContextProvider';

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
     const [open, setOpen] = useState(false)
     const { translations } = useStoreContext()
     const dispatch = useAppDispatch()

     const completeTask = (data: Data) => {
          const newData = { ...data, completed: !data.completed }
          dispatch(updateTask({ task: newData, translations }))
     }

     return (
          <>
               <div className="task" style={{ background: checked ? `teal` : '' }}>
                    <div className="task__input-container" >
                         <input type="checkbox" checked={checked} onChange={() => completeTask(data)} />
                         <p>{title}</p>
                    </div>
                    <div className="task__btn-container">
                         <button className='task__btn-edit'><MdEdit /></button>
                         <button className='task__btn-delete' onClick={() => setOpen(true)}><MdDelete /></button>
                    </div>
               </div>

               {open && <ModalDelete id={id} setOpen={setOpen} />}
          </>
     )
}

export default Task
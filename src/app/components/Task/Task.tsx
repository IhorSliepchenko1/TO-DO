import './Task.scss'
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const Task: React.FC<{ title: string }> = ({ title }) => {
     return (
          <div className="task">
               <div className="task__input-container">
                    <input type="checkbox" />
                    <p>{title}</p>
               </div>
               <div className="task__btn-container">
                    <button className='task__btn-edit'><MdEdit /></button>
                    <button className='task__btn-delete'><MdDelete /></button>
               </div>
          </div>
     )
}

export default Task
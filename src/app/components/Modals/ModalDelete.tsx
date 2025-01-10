import './ModalStyle.scss'
import ModalContainer from './ModalContainer'
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useStoreContext } from '../../../context/ContextProvider';
import { useAppDispatch } from '../../hooks';
import { deleteTask } from '../../features/todoSlice';

type Props = {
     id: string,
     setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalDelete: React.FC<Props> = ({ id, setOpen }) => {
     const { translations } = useStoreContext()
     const dispatch = useAppDispatch()

     const deleteTaskId = () => {
          dispatch(deleteTask({ id, translations }))
          setOpen(false)
     }

     return (
          <ModalContainer setOpen={setOpen}>
               <div className='close'>
                    <IoMdCloseCircleOutline onClick={() => setOpen(false)} />
               </div>
               <p className='title-modal-del'>{translations.titleModalDelete}</p>

               <div className='btn-container'>
                    <button className='del-btn' onClick={deleteTaskId}>{translations.deleteBtn}</button>
                    <button className='cancel-btn' onClick={() => setOpen(false)}>{translations.cancelBtn}</button>
               </div>
          </ModalContainer>
     )
}

export default ModalDelete
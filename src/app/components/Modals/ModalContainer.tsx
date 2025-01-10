import { useEffect, useRef } from "react"

type Props = {
     children: React.ReactNode
     setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalContainer: React.FC<Props> = ({ children, setOpen }) => {
     const ref = useRef(null)

     const closeModal = (e: MouseEvent) => {
          if (e.target === ref.current) {
               setOpen(false)
          }
     }

     // const handleClickOutside = (event: MouseEvent) => {
     //      if (ref.current && !ref.current.contains(event.target as Node)) {
     //           setOpen(false);
     //      }
     // };

     useEffect(() => {
          document.addEventListener(`mousedown`, closeModal)

          return () => document.removeEventListener(`mousedown`, closeModal)
     }, [])

     return (
          <div className='modal-container' ref={ref}>
               <div className='modal'>
                    {children}
               </div>
          </div>
     )
}

export default ModalContainer
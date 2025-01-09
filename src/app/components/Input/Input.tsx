import './Input.scss'

type Props = {
     placeholder: string
}

const Input: React.FC<Props> = ({ placeholder }) => {
     return (
          <div className='input-container'>
               <input type="text" placeholder={placeholder} />
          </div>
     )
}

export default Input
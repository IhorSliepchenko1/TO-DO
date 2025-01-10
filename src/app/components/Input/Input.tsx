import './Input.scss'

type Props = {
     placeholder: string
     onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
     value: string
}

const Input: React.FC<Props> = ({ placeholder, onChange, value }) => {

     return (
          <div className='input-container'>
               <input type="text" placeholder={placeholder} onChange={onChange} name="title" maxLength={50} value={value} />
          </div>
     )
}

export default Input
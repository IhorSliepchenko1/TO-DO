import './Input.scss'

type Props = {
     placeholder: string
     onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
     value: string
}

const Input: React.FC<Props> = ({ placeholder, onChange, value }) => {

     return (
          <label className='input-container' htmlFor='title'>
               <input
                    id='title'
                    type="text"
                    placeholder={placeholder}
                    onChange={onChange}
                    name="title"
                    value={value} />
          </label>
     )
}

export default Input
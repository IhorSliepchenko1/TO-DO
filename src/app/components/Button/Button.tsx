import './Button.scss'

type Props = {
     btnText: string
}

const Button: React.FC<Props> = ({ btnText }) => {
     return (
          <button className="button" type='submit'>{btnText}</button>
     )
}

export default Button
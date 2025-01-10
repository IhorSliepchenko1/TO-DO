import './ErrorMessage.scss'

const ErrorMessage: React.FC<{ error: string }> = ({ error }) => {
     return (
          <p className='error'>{error}</p>
     )
}

export default ErrorMessage
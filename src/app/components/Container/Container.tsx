import { Children } from '../../../types'
import './Container.scss'

const Container: React.FC<Children> = ({ children }) => {
     return (
          <div className='container'>
               <div className="container__todo">
                    {children}
               </div>
          </div>
     )
}

export default Container
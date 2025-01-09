import { Children } from '../../types'
import './Container.scss'

const Container = ({ children }: Children) => {
     return (
          <div className='container'>
               <div className="container__todo">
                    {children}
               </div>
          </div>
     )
}

export default Container
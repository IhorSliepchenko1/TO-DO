import './Container.scss'

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
     return (
          <div className='container'>
               <div className="container__todo">
                    {children}
               </div>
          </div>
     )
}

export default Container
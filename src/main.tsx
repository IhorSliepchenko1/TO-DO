import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import ContextProvider from './context/ContextProvider.tsx'

const root = document.getElementById('root')

createRoot(root!).render(
  <ContextProvider>
    <App />
  </ContextProvider>
)



// https://www.youtube.com/shorts/iZvregCHOu0


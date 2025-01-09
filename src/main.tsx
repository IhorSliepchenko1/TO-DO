import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import ContextProvider from './context/ContextProvider.tsx'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)

  root.render(
    <Provider store={store}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Provider>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}

// https://www.youtube.com/shorts/iZvregCHOu0


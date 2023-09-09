import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { FilterProvider } from './context/filters.tsx'
import './index.css'

const root = document.getElementById('root')

createRoot(root!).render(
  <FilterProvider>
    <App />
  </FilterProvider>
)

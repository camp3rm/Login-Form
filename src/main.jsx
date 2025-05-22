import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { RegisterForm } from './Form/Register-Form.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RegisterForm />
  </StrictMode>,
)

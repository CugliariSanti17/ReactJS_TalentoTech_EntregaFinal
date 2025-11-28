import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { CarritoProvider} from './context/CarritoContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { ProductosProvider } from './context/ProductosContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ProductosProvider>
        <CarritoProvider> 
          <Router>
            <App />
          </Router>
        </CarritoProvider>
      </ProductosProvider>
    </AuthProvider>
  </StrictMode>,
)

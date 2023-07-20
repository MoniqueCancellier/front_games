import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Menu from './components/Menu.jsx';
import App from './App.jsx';


//1-Configurando o Router
import { BrowserRouter} from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
    <Menu/>
    <App/>
    {/* <RouterProvider router={router} /> */}
      </BrowserRouter>
    </React.StrictMode>,
)

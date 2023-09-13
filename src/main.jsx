import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Error from './routes/Error.jsx'
import EditarProduto from './routes/EditarProduto.jsx'
import Produtos from './routes/Produtos.jsx'
import ExcluirProdutos from './routes/ExcluirProdutos.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element : <App/>,
    errorElement:<Error/>,
    children : [
      {
        path: '/',
        element : <Home/>
      },
      {
        path : '/produtos',
        element : <Produtos/>
      },
      {
        path : '/editar/produto/:id',
        element: <EditarProduto/>,
      },
      {
        path : '/excluir/produto/:id',
        element: <ExcluirProdutos/>,
      }
    ]
  }])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

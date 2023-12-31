import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider} from "react-router-dom";

import App from './App.jsx'
import HomePage from './Pages/HomePage/index.jsx';
import ConnectedPage from './Pages/ConnectedPage/index.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/test",
        element: <ConnectedPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

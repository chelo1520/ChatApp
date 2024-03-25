import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import {Routes, Route, BrowserRouter as Router, BrowserRouter} from "react-router-dom"
import { UserProvider } from './context/UserContext'
import { ProtectRoutes } from './ProtectedRutes'
import { ConversacionesContext } from './context/ConversacionesContext'
import { SocketContext } from './context/SocketContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <UserProvider>
      <ConversacionesContext>
        <SocketContext>
          <BrowserRouter>
            <Routes>
              <Route path='/register' element={<Register/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route element={<ProtectRoutes/>}>
                <Route path='/' element={<Home/>}/>
              </Route>         
            </Routes>
          </BrowserRouter>
        </SocketContext>
      </ConversacionesContext>
    </UserProvider>
  </>,
)

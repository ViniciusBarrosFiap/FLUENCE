import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.module.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./routes/Home.jsx"
import "bootstrap/dist/css/bootstrap.min.css"
import Login from './routes/Login.jsx';

// const GlobalStyle = createGlobalStyle`
// @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&display=swap');  
// *{
//       padding: 0;
//       margin: 0;
//       box-sizing: border-box;
//       font-family: 'Montserrat Alternates', sans-serif;
//     }
//     li{
//       list-style: none;
//     }
//     a{
//       text-decoration:none;
//     }
// `
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <GlobalStyle /> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

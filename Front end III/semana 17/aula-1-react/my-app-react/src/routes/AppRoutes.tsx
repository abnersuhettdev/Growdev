import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

const AppRoutes : React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<Home/>}/>
                <Route path='/login' element = {<Login/>}/>
                <Route path='/signup' element = {<Signup/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
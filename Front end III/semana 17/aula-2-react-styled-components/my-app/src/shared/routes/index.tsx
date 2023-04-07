import { BrowserRouter, Route, Routes} from 'react-router-dom'
import {HomeScreen} from '../../screens/Home'

export const Router = () =>{
    return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomeScreen/>}/>
        </Routes>
    </BrowserRouter>
    )
}
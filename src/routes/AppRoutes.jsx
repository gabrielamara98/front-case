import {createBrowserRouter} from 'react-router-dom'
import RootLayout from '../pages/RootLayout'
import About from '../components/About/About'
import Endpoint from '../components/Endpoint/Endpoint'
import Processo from '../components/Processo/Processo'
import Home from '../components/Home/Home'

export const router = createBrowserRouter([
    {path: "/",
    element : <RootLayout/>,
    children:[
        {index:true,element:<Home/>},
        {path:"about", element:<About/>},
        {path:"endpoint",element:<Endpoint/>},
        {path:"setor/*", element:<Processo/>}
    ]
    },
])
import {createBrowserRouter} from 'react-router-dom'
import RootLayout from '../pages/RootLayout'
import Card from '../components/Card/Card'
import About from '../components/About/About'
import Endpoint from '../components/Endpoint/Endpoint'
import Setor from '../components/Setor/Setor'

export const router = createBrowserRouter([
    {path: "/",
    element : <RootLayout/>,
    children:[
        {index:true,element:<Card/>},
        {path:"about", element:<About/>},
        {path:"endpoint",element:<Endpoint/>},
        {path:"setor/*", element:<Setor/>}
    ]
    },
])
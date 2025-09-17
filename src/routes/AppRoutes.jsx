import {createBrowserRouter} from 'react-router-dom'
import RootLayout from '../pages/RootLayout'
import About from '../components/About/About'
import Endpoint from '../components/Endpoint/Endpoint'
import Home from '../pages/Home'
import Area from '../pages/Area'
import Processo from '../pages/Processo'

export const router = createBrowserRouter([
    {path: "/",
    element : <RootLayout/>,
    children:[
        {index:true,element:<Home/>},
        {path:"about", element:<About/>},
        {path:"endpoint",element:<Endpoint/>},
        {path:"area/:id", element:<Area/>},
        { path: "area/:areaId/processo/:processoId", element: <Processo /> }
    ]
    },
])
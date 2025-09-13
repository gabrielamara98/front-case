import {createBrowserRouter} from 'react-router-dom'
import RootLayout from '../pages/RootLayout'
import Card from '../components/Card/Card'

export const router = createBrowserRouter([
    {path: "/",
    element : <RootLayout/>,
    children:[{
        index:true,
        element:<Card/>
    }]
    },
])
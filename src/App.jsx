import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import MayLayout from './layout/MayLayout'
import Home from './pages/Home'
import Davlatlar from './pages/Davlatlar'
import Contact from './pages/Contact'
import ToliqMalumod from './pages/ToliqMalumod'
function App() {
  let router=createBrowserRouter([
    {
      path:"/",
      element:<MayLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/davlatlar",
          element:<Davlatlar/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/malumod",
          element:<ToliqMalumod/>
        },
       
      ]

    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
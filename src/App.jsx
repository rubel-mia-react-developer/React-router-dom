
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/navbar'
import Aobut from './pages/Aobut'
import Home from './pages/Home'
import Help from './pages/Help'
import Contarck from './pages/Contarck'
import NotFound from './pages/NotFound'
import Blog from './pages/Blog'

function App() {

const route = createBrowserRouter(
  createRoutesFromElements(
     <Route>
     <Route path='/' element={<Home/>} />
     <Route path='/aobut' element={<Aobut/>} />
     <Route path='/blog' element={<Blog/>} />
     <Route path='/help' element={<Help/>} />
     <Route path='/contarck' element={<Contarck/>} /> 
     <Route path='*' element={<NotFound/>} />
     </Route>
  )
)
  return (
    <>
 <RouterProvider router={route} />
    </>
  )
}
export default App

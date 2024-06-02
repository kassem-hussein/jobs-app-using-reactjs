import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import { Footer, Header } from './components';
import { Companies, Home ,Job,Jobs} from './pages';


function AppLayout(){
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )

}
const router =createBrowserRouter([
  {
   path:'/',
   element:<AppLayout/>,
   children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/jobs',
        element:<Jobs/>
      },{
        path:'/jobs/:id',
        element:<Job/>
      },{
        path:'/companies',
        element:<Companies/>
      }
   ] 
  }
])
function App() {
  
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App

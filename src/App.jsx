import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider, } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ElectronicsPage from './pages/ElectronicsPage.jsx';
import BookPage from './pages/BookPage.jsx';
import ElectronicsDetailPage from './pages/ElectronicsDetailPage.jsx';
import BookDetailPage from './pages/BookDetailPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';



// Create the router
const router = createBrowserRouter([
  { path: '/', element: <HomePage />,errorElement:<NotFoundPage/>},
  {
    path: '/electronics', 
    element:
     (<div className='layout'>
      <ElectronicsPage/>
      <Outlet/>

     </div>
     ),
    children: [{ path: ':id', element: <ElectronicsDetailPage /> }]
  },
  { path: '/books',
    element:
     (<div className='layout'>
      <BookPage/>
      <Outlet/>

     </div>
     ),
    children: [{ path: ':id', element: <BookDetailPage /> }]
   }
]);

function App() {
  return (
    <RouterProvider router={router}/>

  );
}

export default App;

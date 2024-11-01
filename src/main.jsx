import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import DeshBoard from './Components/DeshBoard/DeshBoard';
import BookDetail from './Components/BookDetail/BookDetail';
import ListedBooks from './Components/ListedBook/ListedBooks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : 'books/:bookId',
        element :<BookDetail></BookDetail>,
        loader : () => fetch('/booksData.json')
      },
      {
        path : 'listedBooks',
        element : <ListedBooks></ListedBooks>,
        loader : () => fetch('/booksData.json')
      },
      {
        path : 'deshboard',
        element : <DeshBoard></DeshBoard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

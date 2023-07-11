import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import NestedChild from './components/NestedChild'
import About from './pages/About'
import Home from "./pages/Home"
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: '/about',
    //     element: <About />,
    //     children: [
    //       {
    //         path: "/about/test",
    //         element: <NestedChild />
    //       }
    //     ]
    //   },
    //   {
    //     path: "/home",
    //     element: <Home />
    //   }
    // ]
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about/test",
        element: <NestedChild />
      }
    ]
  },
  {
    path: "/home",
    element: <Home />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router}/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

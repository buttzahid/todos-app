import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About';
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
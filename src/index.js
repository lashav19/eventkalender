import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Routers/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EventSelecter from './Routers/EventSelecter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: "/event/:id",
    element: <EventSelecter/>
  }

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Routers/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EventRouter from './Routers/EventRouter';
import NavBar from "./Modules/NavBar"
import EventCreator from './Components/EventCreator';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: "/event/:id",
    element: <EventRouter/>
  },
  {
    path: "/create",
    element: 
    <>
      <NavBar/>
      <EventCreator/>
    </>
  }

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

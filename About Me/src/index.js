import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './pages/About';
import Games from './pages/Games';
import Manga from './pages/Manga';
import Anime from './pages/Anime';
import Projects from './pages/Projects';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"
import "./style.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/anime",
    element: <Anime/>,
  },
  {
    path: "/games",
    element: <Games/>,
  },
  {
    path: "/manga",
    element: <Manga/>,
  },
  {
    path: "/projects",
    element: <Projects/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

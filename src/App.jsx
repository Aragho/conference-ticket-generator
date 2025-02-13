import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ROUTES from './route/router';
import './index.css'

const router = createBrowserRouter([...ROUTES]);

function App() {
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;

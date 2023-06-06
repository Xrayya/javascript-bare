import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddMahasiswa from './pages/AddMahasiswa';
import EditMahasiswa from './pages/EditMahasiswa';
import ShowMahasiswa from './pages/ShowMahasiswa';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/dashboard' />,
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
  },
  {
    path: 'add-mahasiswa',
    element: <AddMahasiswa />,
  },
  {
    path: 'edit-mahasiswa',
    element: <EditMahasiswa />,
  },
  {
    path: 'show-mahasiswa',
    element: <ShowMahasiswa />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

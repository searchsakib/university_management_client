import { ReactNode } from 'react';
import AdminDashboard from '../pages/admin/AdminDashboard';
import CreateAdmin from '../pages/admin/CreateAdmin';
import CreateFaculty from '../pages/admin/CreateFaculty';
import CreateStudent from '../pages/admin/CreateStudent';
import { NavLink } from 'react-router-dom';

type TAdminRoute = {
  path: string;
  element: ReactNode;
};

type TAdminSidebar = {
  key: string;
  label: ReactNode;
  children?: TAdminSidebar[];
};

export const adminPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    name: 'User Management',
    children: [
      {
        name: 'Create Admin',
        path: 'create-admin',
        element: <CreateAdmin></CreateAdmin>,
      },
      {
        name: 'Create Faculty',
        path: 'create-faculty',
        element: <CreateFaculty></CreateFaculty>,
      },
      {
        name: 'Create Student',
        path: 'create-student',
        element: <CreateStudent></CreateStudent>,
      },
    ],
  },
];

//! For admin routes(handling with routeGenerator hook now)
// export const adminRoutes = adminPaths.reduce((acc: TAdminRoute[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }

//   if (item.children) {
//     item.children.forEach((elem) => {
//       acc.push({
//         path: elem.path,
//         element: elem.element,
//       });
//     });
//   }
//   return acc;
// }, []);

//! For admin sidebar in navbar
export const adminSidebar = adminPaths.reduce((acc: TAdminSidebar[], item) => {
  if (item.name && item.path) {
    acc.push({
      key: item.name,
      label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
    });
  }

  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((elem) => ({
        key: elem.name,
        label: <NavLink to={`/admin/${elem.path}`}>{elem.name}</NavLink>,
      })),
    });
  }
  return acc;
}, []);

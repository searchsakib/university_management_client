import { ReactNode } from 'react';
import AdminDashboard from '../pages/admin/AdminDashboard';
import CreateAdmin from '../pages/admin/CreateAdmin';
import CreateFaculty from '../pages/admin/CreateFaculty';
import CreateStudent from '../pages/admin/CreateStudent';

type TAdminRoutes = {
  path: string;
  element: ReactNode;
};

const adminPaths = [
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

export const adminRoutes = adminPaths.reduce((acc: TAdminRoutes[], item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }

  if (item.children) {
    item.children.forEach((elem) => {
      acc.push({
        path: elem.path,
        element: elem.element,
      });
    });
  }
  return acc;
}, []);

import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { adminPaths } from './admin.routes';
import { routeGenerator } from '../components/ui/routesGenerator';
import { facultyPaths } from './faculty.routes';
import { studentPaths } from './student.routes';

// type TRouter = {
//   path: string;
//   element: ReactNode;
//   children?: ReactNode[];
// };

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
  },
  {
    path: '/admin',
    element: <App></App>,
    children: routeGenerator(adminPaths),
  },
  {
    path: '/faculty',
    element: <App />,
    children: routeGenerator(facultyPaths),
  },
  {
    path: '/student',
    element: <App />,
    children: routeGenerator(studentPaths),
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/register',
    element: <Register></Register>,
  },
]);

export default router;

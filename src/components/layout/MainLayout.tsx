import { Button, Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useAppDispatch } from '../../redux/hooks';
import { logout } from '../../redux/features/auth/authSlice';

const { Header, Content } = Layout;

const MainLayout = () => {
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Sidebar></Sidebar>
      <Layout>
        <Header>
          <Button onClick={handleLogOut}>Logout</Button>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;

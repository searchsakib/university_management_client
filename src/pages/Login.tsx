import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { useAppDispatch } from '../redux/hooks';
import { setUser, useCurrentUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../components/utils/verifyToken';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: 'A-0001',
      password: 'Tester',
    },
  });
  const [login, { error }] = useLoginMutation();

  const onSubmit = async (data) => {
    const toastId = toast.loading('Loggin in...');
    try {
      const userInfo = {
        id: data?.id,
        password: data?.password,
      };

      const res = await login(userInfo).unwrap();
      const user = verifyToken(res?.data?.accessToken);
      dispatch(
        setUser({
          user: user,
          token: res?.data?.accessToken,
        })
      );
      toast.success('Login Successful!', { id: toastId, duration: 3000 });
      navigate(`/${user.role}/dashboard`);
    } catch (err) {
      toast.error('Something went wrong!', { id: toastId, duration: 3000 });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='id'>Id: </label>
        <input type='text' id='id' {...register('id')} />
      </div>
      <div>
        <label htmlFor='password'>Password: </label>
        <input type='text' id='password' {...register('password')} />
      </div>
      <Button htmlType='submit' type='primary'>
        Submit
      </Button>
    </form>
  );
};

export default Login;

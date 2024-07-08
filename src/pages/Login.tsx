import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: 'A-0001',
      password: 'Tester',
    },
  });
  const [login, { data, error }] = useLoginMutation();

  const onSubmit = (data) => {
    const userInfo = {
      id: data?.id,
      password: data?.password,
    };
    login(userInfo);
  };
  console.log('This is data=>', data);
  console.log('This is login=>', login);
  console.log('This is error=>', error);

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

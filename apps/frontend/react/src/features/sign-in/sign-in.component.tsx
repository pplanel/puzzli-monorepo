// Dependencies
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

// Utils
import { useAuth } from '~/hooks/auth';

// Components
import Button from '~/components/button';
import Input from '~/components/input';
import ValidationError from '~/components/validation-error';

// Assets
import { Content } from './sign-in.styles';

type IFormData = {
  username: string;
  password: string;
};

const SignIn: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const history = useHistory();

  const { signIn, checkLogin } = useAuth();

  const schema = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
  });

  const { register, handleSubmit, errors } = useForm<IFormData>({
    validationSchema: schema,
  });

  const submit = async ({ username, password }: IFormData) => {
    signIn({ username, password })
      .then((res: boolean) => {
        if (res) {
          history.push('/dashboard');
        } else {
          setError('Invalid credentials');
        }
      })
      .catch(() => setError('Invalid credentials'));
  };

  const doCheckLogin = async () => {
    if (localStorage.getItem('@Skeleton:token')) {
      const loginSuccessful: boolean = await checkLogin();

      if (loginSuccessful) {
        history.push('/hello-pages');
      }
    }
  };

  useEffect(() => {
    doCheckLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Content>
      <form onSubmit={handleSubmit(submit)}>
        <Input
          name="username"
          smallCaps="Username"
          type="text"
          errors={errors.username}
          handleInput={(e) => {
            setError(null);
          }}
          ref={register({
            required: {
              value: true,
              message: 'Username is a required field',
            },
          })}
        />

        <Input
          name="password"
          smallCaps="Password"
          type="password"
          errors={errors.password}
          handleInput={(e) => {
            setError(null);
          }}
          ref={register({
            required: {
              value: true,
              message: 'Password is a required field',
            },
          })}
        />

        {error && <ValidationError text={error} />}

        <Button text="Enter" type="submit" />
      </form>
    </Content>
  );
};

export default SignIn;

// Dependencies
import React, { createContext, useCallback, useState, useContext } from 'react';

// Utils
import { IAuthState, IAuthContext } from '~/utils/interfaces/auth';
import { login } from '~/services/auth/login.service';
import { getAvatar } from '~/services/auth/get-avatar.service';

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@Skeleton:token');

    if (token) {
      return {
        token,
      };
    }

    return {} as IAuthState;
  });

  const fetchProfile = useCallback(async () => {
    return getAvatar().catch(() => {
      localStorage.removeItem('@Skeleton:token');

      setData({} as IAuthState);
    });

    // eslint-disable-next-line
  }, []);

  const checkLogin = async (): Promise<boolean> => {
    const profile = await fetchProfile();

    if (profile) {
      const {
        fullname,
        username,
        id,
      } = profile.data.CustomQueries.UserQueries.GetAvatar;

      const token = localStorage.getItem('@Skeleton:token');

      setData({ token, profile: { fullname, username, id } });

      return true;
    }

    return false;
  };

  const signIn = useCallback(
    async ({ username: user, password: pass }) => {
      let token;

      await login(user, pass).then((res) => {
        token = res.data?.CustomMutations.LoginMutations.Login.token;
      });

      if (token) {
        localStorage.setItem('@Skeleton:token', token);

        const profile = await fetchProfile();

        if (profile) {
          const {
            fullname,
            username,
            id,
          } = profile.data.CustomQueries.UserQueries.GetAvatar;

          setData({ token, profile: { fullname, username, id } });

          return true;
        }
      }

      return false;
    },

    // eslint-disable-next-line
    [fetchProfile],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@Skeleton:token');

    setData({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ data, signIn, signOut, checkLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

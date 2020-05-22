import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from '../services/auth';

interface User {
  name: string;
  email: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStoragedData = async () => {
      const [storagedToken, storagedUser] = await AsyncStorage.multiGet([
        '@RNAuth:token',
        '@RNAuth:user',
      ]);

      if (storagedToken[1] && storagedUser[1]) {
        // When use Axios
        // api.defaults.headers['Authorization] = `Bearer ${storagedToken[1]}`

        setUser(JSON.parse(storagedUser[1]));
        setLoading(false);
      }
    };

    loadStoragedData();
  }, []);

  const signIn = async () => {
    const response = await auth.signIn();
    const { token, user: userResponse } = response;

    setUser(userResponse);

    // When use Axios
    // api.defaults.headers['Authorization] = `Bearer ${token}`

    await AsyncStorage.multiSet([
      ['@RNAuth:user', JSON.stringify(userResponse)],
      ['@RNAuth:token', token],
    ]);
  };

  const signOut = () => {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  };

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

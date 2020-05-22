import React from 'react';
import { useAuth } from '../context/auth';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import { View, ActivityIndicator } from 'react-native';

const Routes: React.FC = () => {
  const { signed, loading } = useAuth();

  console.log(loading);
  if (loading && signed) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    );
  }

  return signed ? <AuthRoutes /> : <AppRoutes />;
};

export default Routes;

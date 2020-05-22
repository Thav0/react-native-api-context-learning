import React from 'react';
import SignIn from '../pages/SignIn';

import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen component={SignIn} name="SignIn" />
  </AppStack.Navigator>
);

export default AuthRoutes;

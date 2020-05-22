import React from 'react';
import Dashboard from '../pages/Dashboard';

import { createStackNavigator } from '@react-navigation/stack';

const RouteStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <RouteStack.Navigator>
    <RouteStack.Screen component={Dashboard} name="Dashboard" />
  </RouteStack.Navigator>
);

export default AuthRoutes;

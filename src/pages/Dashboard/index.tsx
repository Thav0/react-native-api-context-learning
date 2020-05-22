import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { useAuth } from '../../context/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  const handleSignOut = () => {
    signOut();
  };
  return (
    <View style={styles.container}>
      <Text>{user?.name}</Text>
      <Button title="SignOut" onPress={handleSignOut} />
    </View>
  );
};

export default Dashboard;

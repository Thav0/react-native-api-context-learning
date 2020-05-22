import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useAuth } from '../../context/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

const SignIn: React.FC = () => {
  const { signed, signIn, user } = useAuth();

  console.log(signed);
  console.log(user);
  const handleSignIn = async () => {
    await signIn();
  };
  return (
    <View style={styles.container}>
      <Button title="SignIn" onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;

import { router, Stack } from 'expo-router';
import { StyleSheet, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import React, { useState } from 'react';
import { TextInput, Button, Text } from 'react-native-paper';
import {auth} from '../FirebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginScreen() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleLogin = async () => {
    setError('');
    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }
    try {
      // Mock authentication logic
      const user = await signInWithEmailAndPassword(auth, email, password)
      if(user) router.replace('/(tabs)/home') 
    } catch (err) {
      setError('Something went wrong');
      console.log(err)
      alert(err);
    }
  };
  return (
    <>
      <Stack.Screen options={{ title: 'Login' }} />
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.centeredView}>
              {/* <ThemedText type="title">Please Login to CreateStyle.</ThemedText>
              <Link href="/(tabs)/home" style={styles.link}>
                <ThemedText type="link">Go to home screen!</ThemedText>
              </Link>
              <Link href="/register" style={styles.link}>
                <ThemedText type="link">Register!</ThemedText>
              </Link> */}
              <Text variant="headlineLarge" style={styles.title}>Login</Text>
              <TextInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}
                theme={{ colors: { text: 'black' } }}
              />
              <TextInput
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
                theme={{ colors: { text: 'black' } }}
              />
              {error ? <Text style={styles.error}>{error}</Text> : null}
              <Button mode="contained" onPress={handleLogin} style={styles.button}>
                Login
              </Button>
              <Button mode="contained" onPress={ () => { router.replace('/register') } } style={styles.button}>
                Register
              </Button>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
  },
  input: {
    width: '100%',
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
    width: '100%',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  link: {
    marginTop: 15,
  },
});

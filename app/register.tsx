import { router } from 'expo-router';
import { StyleSheet, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import React, { useState } from 'react';
import { TextInput, Button, Text } from 'react-native-paper';
import { useSession } from "@/context";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { signUp } = useSession();
  const [error, setError] = useState("");
  

  // ============================================================================
  // Handlers
  // ============================================================================

  /**
   * Handles the registration process
   * @returns {Promise<Models.User<Models.Preferences> | null>}
   */
  const handleRegister = async () => {
    setError('');
    if (!email || !password || !name) {
      setError('Please fill in all fields');
      return;
    }
    try {
      return await signUp(email, password, name);
    } catch (err) {
      console.log("[handleRegister] ==>", err);
      setError('Something went wrong');
      return null;
    }
  };

  /**
   * Handles the sign-up button press
   */
  const handleSignUpPress = async () => {
    const resp = await handleRegister();
    if (resp) {
      router.replace("/(app)/(tabs)");
    }
  };
  return (
    <>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.centeredView}>
              {/* <ThemedText type="title">Please Register to CreateStyle.</ThemedText>
              <Link href="/(tabs)/home" style={styles.link}>
                <ThemedText type="link">Go to home screen!</ThemedText>
              </Link>
              <Link href="/register" style={styles.link}>
                <ThemedText type="link">Register!</ThemedText>
              </Link> */}
              <Text variant="headlineLarge" style={styles.title}>Register</Text>
              <TextInput
                label="Name"
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
                style={styles.input}
                theme={{ colors: { text: 'black' } }}
              />
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
              <Button mode="contained" onPress={handleSignUpPress} style={styles.button}>
                Register
              </Button>
              <Button mode="contained" onPress={ () => { router.replace('/') } }  style={styles.button}>
                Already registerd go to sign up
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

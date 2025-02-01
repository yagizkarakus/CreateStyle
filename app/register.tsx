import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'register' }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">Please register to CreateStyle.</ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link">Go to login screen!</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  link: {
    marginTop: 15,
    // paddingVertical: 10,
  },
});


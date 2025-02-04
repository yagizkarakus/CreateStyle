import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { SessionProvider } from '@/context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <SessionProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          {/* 
            Slot renders child routes dynamically
            This includes both (app) and (auth) group routes
          */}
          <Slot />
        </GestureHandlerRootView>
      </ThemeProvider>
    </SessionProvider>
  );
  // return (
  //   <SessionProvider>
  //     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
  //       <Stack>
  //         <Stack.Screen name="index" options={{ headerShown: false }}/>
  //         <Stack.Screen name="register" options={{ headerShown: false }} />
  //         <Stack.Screen name="(app)"  />
  //         <Stack.Screen name="+not-found" />
  //       </Stack>
  //       <StatusBar style="auto" />
  //     </ThemeProvider>
  //   </SessionProvider>
  // );
}
// export default function Root() {
//   // Set up the auth context and render our layout inside of it.
//   return (
//     <SessionProvider>
//       {/* 
//         GestureHandlerRootView is required for:
//         - Drawer navigation gestures
//         - Swipe gestures
//         - Other gesture-based interactions
//         Must wrap the entire app to function properly
//       */}
//       <GestureHandlerRootView style={{ flex: 1 }}>
//         {/* 
//           Slot renders child routes dynamically
//           This includes both (app) and (auth) group routes
//         */}
//         <Slot />
//       </GestureHandlerRootView>
//     </SessionProvider>
//   );
// }
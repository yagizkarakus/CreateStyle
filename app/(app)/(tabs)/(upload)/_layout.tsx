import { Stack, Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import global icons

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ImageProvider } from '@/context/ImageContext';

export default function StackLayout() {
  const colorScheme = useColorScheme();

  return (
    <ImageProvider>
        <Stack>
            <Stack.Screen
            name="index"
            options={{
                title: 'Upload',
            }}
            />
            {/* <Stack.Screen
            name="fromgallery"
            options={{
                title: 'UploadFromGallery',
            }}
            /> */}
            <Stack.Screen
            name="editimage"
            options={{
                title: 'edit',
            }}
            />
        </Stack>
    </ImageProvider>
  );
}

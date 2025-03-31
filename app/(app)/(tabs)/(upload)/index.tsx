import { Image, StyleSheet, Platform } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { useImage } from '@/context/ImageContext';


export default function UploadHomeScreen() {
  const { setImageUri } = useImage(); // Use the context

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    

    console.log(result);

    if (!result.canceled) {
      // setImage(result.assets[0].uri);
      setImageUri(result.assets[0].uri); // Store in context
      router.push("/editimage");
    }
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access camera is required!');
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      // setImage(result.assets[0].uri);
      setImageUri(result.assets[0].uri); // Store in context
      router.push("/editimage");
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

      <Text style={styles.title}>Upload images from galerry!</Text>

      {/* Upload Clothes */}
      <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
        <Ionicons name="cloud-upload-outline" size={24} color="white" />
        <Text style={styles.uploadText}>Upload From Galerry</Text>
      </TouchableOpacity>

      {/* Outfit Suggestions */}
      <Text style={styles.title}>Upload via Camera App!</Text>
      <TouchableOpacity style={styles.suggestionButton} onPress={takePhoto}>
        <Ionicons name="cloud-upload-outline" size={24} color="white" />
        <Text style={styles.uploadText}>Take a photo</Text>
      </TouchableOpacity>

      {/* {image && <Image source={{ uri: image }} style={styles.image} />} */}
    </ScrollView>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  uploadButton: {
    flexDirection: "row",
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  uploadText: {
    color: "white",
    fontSize: 16,
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
  },
  flatlistsection: {
    paddingBottom: 0,
    margin: 0,
    height: 200
  },
  clothesItem: {
    alignItems: "center",
    justifyContent: "center", // Fix extra space
    marginRight: 15,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    alignSelf: "center",
    marginVertical: "auto"
  },
  clothesText: {
    marginTop: 5,
    fontSize: 14,
    textAlign: "center",
  },
  suggestionButton: {
    flexDirection: "row",
    backgroundColor: "#15bb30",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  suggestionText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

});

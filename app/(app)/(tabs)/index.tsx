import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';
import { getAuth } from 'firebase/auth';
import { Text } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';

export default function HomeScreen() {

  const clothes = [
    { id: "1", image: "https://via.placeholder.com/100", name: "Red Dress" },
    { id: "2", image: "https://via.placeholder.com/100", name: "Blue Jeans" },
    { id: "3", image: "https://via.placeholder.com/100", name: "White Shirt" },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back, User!</Text>

      {/* Upload Clothes */}
      <TouchableOpacity style={styles.uploadButton} onPress={() => router.replace('/explore')}>
        <Ionicons name="cloud-upload-outline" size={24} color="white" />
        <Text style={styles.uploadText}>Explore New Clothes</Text>
      </TouchableOpacity>

      {/* Suggested Outfits */}
      <Text style={styles.sectionTitle}>Your Wardrobe</Text>
      <FlatList
        data={clothes}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.clothesItem}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.clothesText}>{item.name}</Text>
          </View>
        )}
      />

      {/* Outfit Suggestions */}
      <Text style={styles.sectionTitle}>Suggested Outfits</Text>
      <TouchableOpacity style={styles.suggestionButton}>
        <Text style={styles.suggestionText}>Generate Outfit</Text>
      </TouchableOpacity>
    </View>
  );
};


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
    marginBottom: 20,
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
  clothesItem: {
    alignItems: "center",
    marginRight: 15,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  clothesText: {
    marginTop: 5,
    fontSize: 14,
  },
  suggestionButton: {
    backgroundColor: "#2ecc71",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  suggestionText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

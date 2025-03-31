import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import { Text } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {

  const clothes = [
    { id: "1", image: "https://picsum.photos/100", name: "Red Dress" },
    { id: "2", image: "https://picsum.photos/100", name: "Blue Jeans" },
    { id: "3", image: "https://picsum.photos/100", name: "White Shirt" },
    { id: "4", image: "https://picsum.photos/100", name: "Red Dress" },
    { id: "5", image: "https://picsum.photos/100", name: "pink socks" },
    { id: "6", image: "https://picsum.photos/100", name: "pink skirt" },
    { id: "7", image: "https://picsum.photos/100", name: "Red Dress" },
    { id: "8", image: "https://picsum.photos/100", name: "Blue Jeans" },
    { id: "9", image: "https://picsum.photos/100", name: "White Shirt" },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

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
          contentContainerStyle={{
            paddingHorizontal: 10,
            paddingVertical: 5, // Ensure no extra padding
            marginVertical: 0, // Remove unwanted margins
          }}
          style={{ flexGrow: 0, backgroundColor: "#3498db" }} // Ensure it doesn't expand unexpectedly
          showsHorizontalScrollIndicator={false}
        />



        {/* Outfit Suggestions */}
        <Text style={styles.sectionTitle}>Suggested Outfits</Text>
        <TouchableOpacity style={styles.suggestionButton}>
          <Text style={styles.suggestionText}>Generate Outfit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
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
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  clothesText: {
    marginTop: 5,
    fontSize: 14,
    textAlign: "center",
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

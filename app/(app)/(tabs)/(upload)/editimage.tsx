import { View, Image, StyleSheet } from "react-native";
import { useImage } from '@/context/ImageContext';
import { useRouter } from "expo-router";
import * as ImageManipulator from "expo-image-manipulator";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native-paper";

export default function EditImageScreen() {
  const router = useRouter();
  const { imageUri } = useImage(); // Get URI from context

  if (!imageUri) return <Text>No image selected</Text>;

  const editImage = async () => {
    const editedImage = await ImageManipulator.manipulateAsync(
      imageUri,
      [{ resize: { width: 800 } }],
      { compress: 0.8, format: ImageManipulator.SaveFormat.PNG }
    );

    // router.push("/upload"); // Navigate back after editing
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Your Image</Text>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <TouchableOpacity style={styles.editButton} onPress={editImage}>
        <Text style={styles.editText}>Apply Edits</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", alignItems: "center", justifyContent: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  image: { width: 250, height: 250, borderRadius: 10, marginBottom: 20 },
  editButton: { backgroundColor: "#27ae60", padding: 15, borderRadius: 10 },
  editText: { color: "white", fontSize: 16 },
});

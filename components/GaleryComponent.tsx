import React, { useState } from "react";
import { View, FlatList, Modal, Pressable, Image, Text, StyleSheet } from "react-native";
import ImageComponent from "./ImageComponent";

// Cargamos las imágenes directamente con require
const images = [
  require('../assets/perro1.jpg'),
  require('../assets/perro2.jpg'),
  require('../assets/perro3.jpg'),
  require('../assets/perro4.jpg'),
  require('../assets/perro5.jpg'),
  require('../assets/perro6.jpg'),
];

interface Props {
  onLike: () => void;
}

const GaleryComponent: React.FC<Props> = ({ onLike }) => {
  const [selectedImage, setSelectedImage] = useState<any | null>(null);

  const openModal = (image: any) => {
    setSelectedImage(image);
    onLike(); // 👈 Aumenta contador global
  };

  const renderItem = ({ item }: { item: any }) => (
    <ImageComponent uri={item} onPress={() => openModal(item)} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        numColumns={3}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ padding: 10 }}
      />

      <Modal
        visible={selectedImage !== null}
        transparent={true}
        animationType="fade"
      >
        <Pressable
          style={styles.modalContainer}
          onPress={() => setSelectedImage(null)}
        >
          <View style={styles.modalContent}>
            {selectedImage && <Image source={selectedImage} style={styles.modalImage} />}
            <Text style={styles.modalText}>Tap to close</Text>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 40 },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center"
  },
  modalContent: { alignItems: "center" },
  modalImage: { width: 300, height: 300, borderRadius: 15 },
  modalText: { color: "white", marginTop: 20, fontSize: 18 },
});

export default GaleryComponent;

import React from "react";
import { Pressable, Image, StyleSheet } from "react-native";

type Props = {
  uri: any;
  onPress: () => void;
};

export default function ImageComponent({ uri, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={uri} style={styles.image} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
});

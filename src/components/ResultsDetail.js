import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: result.image_url }} style={styles.imageStyle} />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text style={styles.detailStyle}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },

  nameStyle: {
    fontWeight: "bold",
  },

  detailStyle: {
    color: "gray",
  },
});

export default ResultsDetail;

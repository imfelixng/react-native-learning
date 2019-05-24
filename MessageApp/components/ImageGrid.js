import { Image, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import React from "react";
import CameraRoll from "@react-native-community/cameraroll";

import Grid from "./Grid";
const keyExtractor = ({ uri }) => uri;

const ImageGrid = ({ onPressImage = () => {} }) => {
  const [images, setImages] = React.useState([]);
  const [cursor, setCursor] = React.useState(null);
  let loading = false;

  React.useEffect(() => {
    getImages();
  }, []);

  const getImages = async after => {
    const results = await CameraRoll.getPhotos({
      first: 20,
      after
    });
    const {
      edges,
      page_info: { has_next_page, end_cursor }
    } = results;
    const loadedImages = edges.map(item => item.node.image);
    setImages([...images, ...loadedImages]);
    loading = false;
    setCursor(has_next_page ? end_cursor : null);
  };

  const getNextImages = () => {
    if (!cursor) return;
    getImages(cursor);
  };

  const renderItem = ({ item: { uri }, size, marginTop, marginLeft }) => {
    const style = {
      width: size,
      height: size,
      marginLeft,
      marginTop
    };
    return (
      <TouchableOpacity
        key={uri}
        activeOpacity={0.75}
        onPress={() => onPressImage(uri)}
        style={style}
      >
        <Image source={{ uri }} style={styles.image} />
      </TouchableOpacity>
    );
  };

  return (
    <Grid
      data={images}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      onEndReached={getNextImages}
    />
  );
};

ImageGrid.propTypes = {
  onPressImage: PropTypes.func
};

const styles = StyleSheet.create({
  image: {
    flex: 1
  }
});

export default ImageGrid;

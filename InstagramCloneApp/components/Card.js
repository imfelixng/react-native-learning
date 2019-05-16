import {
  Image, StyleSheet, View,
  ActivityIndicator
} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import AuthorRow from './AuthorRow';

const Card = (
  {
    fullname,
    image,
    linkText = '',
    onPressLinkText = () => {},
  }
) => {

  const [loading, setLoading] = React.useState(true);

  const handleLoadImage = () => {
    setLoading(false);
  }

  return (
    <View>
      <AuthorRow
        fullname={fullname}
        linkText={linkText}
        onPressLinkText={onPressLinkText}
      />
      <View
        style = { styles.image }
      >
        {
          loading && (
            <ActivityIndicator
              style={StyleSheet.absoluteFill}
              size={'large'}
            />
          )
        }
        <Image
          style={StyleSheet.absoluteFill}
          source={image}
          onLoad = { handleLoadImage }
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1, // not css
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  });

Card.propTypes = {
  fullname: PropTypes.string.isRequired,
  image: Image.propTypes.source.isRequired,
  linkText: PropTypes.string,
  onPressLinkText: PropTypes.func,
}

export default Card;
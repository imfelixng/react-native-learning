import { ColorPropType, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

const Avatar = (
  {
    size,
    backgroundColor,
    initials
  }
) => {

  const style = {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor,
  }

  return (
    <View style= { [style, styles.container] }
    >
      <Text style = { styles.text }>
        {initials}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: '500'
  },
})

Avatar.propTypes = {
  initials: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  backgroundColor: ColorPropType.isRequired,
};

export default Avatar;
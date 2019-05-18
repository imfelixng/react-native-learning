import { StyleSheet, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

const CommentInput = (
  {
    onSubmit,
    placeholder = '',
  }
) => {
  const [text, setText] = React.useState('');

  const handleChangeText = (newText) => {
    setText(newText);
  }

  const handleSubmitEditing = () => {
    onSubmit(text);
    setText('');
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        placeholder={placeholder}
        underlineColorAndroid="transparent"
        onChangeText={handleChangeText}
        onSubmitEditing={handleSubmitEditing}
      />
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    paddingHorizontal: 20,
    height: 60,
  },
  input: {
    flex: 1,
  },
});

CommentInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
}

export default CommentInput;
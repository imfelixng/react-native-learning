import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const SearchInput = (props) => {

  const [keyword, setKeyword] = React.useState(props.city);

  const handleInputText = (keyword) => {
    setKeyword(keyword);
  }

  const handleSubmit = () => {
    props.onSubmit(keyword);
    setKeyword('');
  }

  return (
    <View style = { styles.container }>
      <TextInput
        autoCorrect={false}
        placeholder={props.placeholder}
        placeholderTextColor="white"
        underlineColorAndroid="transparent"
        style={styles.textInput}
        clearButtonMode="always"
        onChangeText = { handleInputText }
        onSubmitEditing = { handleSubmit }
        value = { keyword }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#666',
    color: 'white',
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
    color: '#fff'
  },
});

export default SearchInput;
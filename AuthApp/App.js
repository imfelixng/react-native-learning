import React from 'react';
import { Text, SafeAreaView, TouchableHighlight, View } from 'react-native';
import Auth0 from 'react-native-auth0';

const auth0 = new Auth0({
  domain: 'ngquangan.auth0.com',
  clientId: 'Du6GDNjQGtU94EX0fMNivL8jUxstpTHu',
});

const App = () => {
  return (
    <SafeAreaView>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#ff0000',
          marginTop: 50,
        }}
      >
        <TouchableHighlight
          style={{
            height: 30,
            backgroundColor: '#FF0',
            width: 200,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            auth0.webAuth
              .authorize({
                scope: 'openid email',
                audience: 'https://ngquangan.auth0.com/userinfo',
              })
              .then(credentials => {
                alert('aa');
                console.log(credentials);
              })
              .catch(error => console.log(error));
          }}
        >
          <Text>Login</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default App;

import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
export default function App() {

  const [email, SetEmail] = useState(null)
  const [password, SetPassword = {}] = useState(null)
  const entrar = () => {
    console.log("entrou")
    console.log(email)
    console.log(password)
  }

  return (
    <View style={styles.container}>
      <Text h3>LOG IN</Text>
      <Input
        placeholder="E-mail"
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText={value => SetEmail(value)}
        keyboardType="email-address"
      />
      <Input
        placeholder="Password"
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        onChangeText={value => SetPassword(value)}
        secureTextEntry={true}
      />

      <Button
        title="LOG IN"
        onPress={() => entrar()}
        buttonStyle={{
          backgroundColor: 'black',
          borderWidth: 2,
          borderColor: 'white',
          borderRadius: 30,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        titleStyle={{ fontWeight: 'bold' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

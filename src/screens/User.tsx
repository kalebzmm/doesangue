import React, { useState } from 'react'
import { StyleSheet, TouchableNativeFeedback, View } from "react-native";
import { Button } from 'react-native-paper';
import TextInput from '../components/TextInput';
import { Avatar } from 'react-native-paper'
import { store } from '../store/redux-store';
import { useDispatch } from 'react-redux';
import { setSignOut } from '../store/slices/auth-slice';

const UserScreen = ({ navigation }: any) => {

  const dispatch = useDispatch();

  const [name, setName] = useState({ value: 'Kaleb Zimmermann', error: '' })
  const [email, setEmail] = useState({ value: 'kalebjean22@gmail.com', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const Logout = () => {
    dispatch(setSignOut())
  }

  React.useEffect(() => {
    const userData = store.getState();
    setName({...name, value: userData.userData.name || ''})
    setEmail({...email, value: userData.userData.email || ''})
  }, [])

  return (
    <View style={styles.container}>
      <Avatar.Image style={styles.avatar} size={150} source={require('../assets/avatar.jpg')} />
      <TextInput
        label="Nome"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text: string) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="E-mail"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text: string) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Senha"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text: string) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <TouchableNativeFeedback>
        <Button style={styles.saveButton} icon="content-save" mode="contained">
          Salvar
        </Button>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback>
        <Button style={styles.logoutButton} icon="logout" mode="outlined" onPress={Logout}>
          Sair
        </Button>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutButton: {
    position: 'absolute',
    top: 20,
    right: -25
  },
  saveButton: {
    width: '100%',
    marginTop: 15
  },
  avatar: {
    marginBottom: 20
  }
})

export default UserScreen;

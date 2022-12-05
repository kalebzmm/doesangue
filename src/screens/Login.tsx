import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import theme from '../core/theme'
import { useDispatch } from 'react-redux'
import { setSignIn } from '../store/slices/auth-slice'
import { authUser } from '../services/user'

const LoginScreen = ({ navigation }: any) => {

  const [email, setEmail] = useState({ value: 'kalebjean22@gmail.com', error: '' })
  const [password, setPassword] = useState({ value: 'hb1036', error: '' })
  const dispatch = useDispatch();

  const handleLogin = () => {
      setPassword({...password, error: ''})
      setEmail({...email, error: ''})
      authUser(email.value, password.value).then((data) => {
        dispatch(setSignIn(data));
      }).catch((err) => {
        console.log(err)
        setPassword({...password, error: 'Usuário e/ou senha incorretos'})
      })
  }

  return (
    <Background>
      <Header>
        doe
        <Image style={styles.logo} source={require('../assets/logo.jpg')} />
        sangue
      </Header>
      <TextInput
        description={""}
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
        description={""}
        label="Senha"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text: string) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button style={{}} mode="contained" onPress={handleLogin}>
        Entrar
      </Button>
      <View style={styles.row}>
        <Text>Ainda não tem uma conta? </Text>
        <TouchableOpacity onPress={() => navigation.replace('Register')}>
          <Text style={styles.link}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  logo: {
    width: 40,
    height: 40,
  }
})

export default LoginScreen
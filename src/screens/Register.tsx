import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import theme from '../core/theme'
import SelectOptions from '../components/Select'
import DatePicker from '../components/DatePicker'
import { registerUser } from '../services/user'

const RegisterScreen = ({ navigation }: any) => {

  const formatDate = (d: Date) => {
    return d.toISOString().split('T')[0];
  }

  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [bloodType, setBloodType] = useState({ value: '', error: '' })
  const [birth, setBirth] = useState({ date: new Date(), value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [error, setError] = useState('')
  const bloodTypes = [
    {label: 'A+', value: 'A+'},
    {label: 'A-', value: 'A-'},
    {label: 'B+', value: 'B+'},
    {label: 'B-', value: 'B-'},
    {label: 'O+', value: 'O+'},
    {label: 'O-', value: 'O-'},
    {label: 'AB+', value: 'AB+'},
    {label: 'AB-  ', value: 'AB-'},
  ]

  const goToLoginPage = () => {
    navigation.replace('Login')
  }

  const onSignUpPressed = () => {
    setError('');
    registerUser(
      name.value,
      email.value,
      password.value,
      bloodType.value,
      birth.value
    ).then((data: any) => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      })
    }).catch((err) => {
      setError('Verifique os dados informados e tente novamente.');
    })
  }

  return (
    <Background>
      <Header>cadastre-se</Header>
      {error && <Text style={{color: 'red', textAlign: 'center', marginBottom: 5}}>{error}</Text>}
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
      <SelectOptions
        label="Tipo Sanguíneo"
        value={bloodType.value}
        setValue={(text: string) => setBloodType({ value: text, error: '' })}
        list={bloodTypes}
      />
      <DatePicker
        label="Nascimento"
        value={birth.date}
        onChange={(d: Date) => setBirth({date: d, value: formatDate(d), error: ''})}
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
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Cadastrar
      </Button>
      <View style={styles.row}>
        <Text>Já tem uma conta? </Text>
        <TouchableOpacity onPress={goToLoginPage}>
          <Text style={styles.link}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})

export default RegisterScreen

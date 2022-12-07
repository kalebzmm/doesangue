import React, { useState } from 'react'
import { StyleSheet, TouchableNativeFeedback, View } from "react-native";
import { Button } from 'react-native-paper';
import TextInput from '../components/TextInput';
import { Avatar } from 'react-native-paper'
import { store } from '../store/redux-store';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData, setSignOut } from '../store/slices/auth-slice';
import DatePicker from '../components/DatePicker';
import moment from 'moment'
import TimePicker from '../components/TimePicker';

const NewSchedule = ({ navigation }: any) => {

  const dispatch = useDispatch();

  const userData = useSelector(selectUserData);
  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [bloodType, setBloodType] = useState({ value: '', error: '' })
  const [scheduleDate, setScheduleDate] = useState({ date: new Date(), value: '', error: '' })

  const goBack = () => {
    navigation.goBack();
  }

  React.useEffect(() => {
    setName({value: userData.name, error: ''})
    setEmail({value: userData.email, error: ''})
    setBloodType({value: userData.blood_type, error: ''})
    setBloodType({value: userData.blood_type, error: ''})
  }, [userData])

  return (
    <View style={styles.container}>
      <DatePicker
        label="Data"
        value={scheduleDate.date}
        onChange={(d: Date) => setScheduleDate({date: d, value: moment(d).format('YYYY-MM-DD hh:mm:ss'), error: ''})}
      />
      <TimePicker
        label="Hora"
        value={scheduleDate.date}
        // onChange={(d: Date) => setScheduleDate({date: d, value: moment(d).format('YYYY-MM-DD hh:mm:ss'), error: ''})}
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
        label="Tipo sanguíneo"
        returnKeyType="next"
        value={bloodType.value}
        onChangeText={(text: string) => setBloodType({ value: text, error: '' })}
        error={!!bloodType.error}
        errorText={bloodType.error}
        disabled
      />
      <TouchableNativeFeedback>
        <Button style={styles.saveButton} mode="contained">
          Agendar
        </Button>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback>
        <Button style={styles.goBackButton} mode="outlined" onPress={goBack}>
          Cancelar
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
  goBackButton: {
    width: '100%',
    marginTop: 15
  },
  saveButton: {
    width: '100%',
    marginTop: 15
  },
  avatar: {
    marginBottom: 20
  }
})

export default NewSchedule;

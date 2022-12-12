import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput } from 'react-native-paper'
import { registerTranslation, TimePicker as TimePickerInput } from 'react-native-paper-dates'
import theme from '../core/theme'

registerTranslation("pt-br", {
    save: 'Salvar',
    selectSingle: 'Selecione a data',
    selectMultiple: 'Selecione das datas',
    selectRange: 'Selecione o período',
    notAccordingToDateFormat: (inputFormat) =>
      `O formato da data deve ser ${inputFormat}`,
    mustBeHigherThan: (date) => `A data deve ser depois de ${date}`,
    mustBeLowerThan: (date) => `A data deve ser antes de ${date}`,
    mustBeBetween: (startDate, endDate) =>
      `Deve estar entre ${startDate} e ${endDate}`,
    dateIsDisabled: 'Dia não está habilitado',
    previous: 'Voltar',
    next: 'Próximo',
    typeInDate: 'Informe a data',
    pickDateFromCalendar: 'Selecione uma data do calendário',
    close: 'Fechar',
})

const TimePicker = ({ errorText, description, ...props }: any) => {

  const [visible, setVisible] = React.useState(false);

  const hideTimePicker = () => {
    setVisible(false)
  }

  return (
    <View style={styles.container}>
      <TextInput
        locale='pt-br'
        mode='single'
        visible={visible}
        onDismiss={hideTimePicker}
        {...props}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  description: {
    fontSize: 13,
    color: theme.colors.secondary,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
})


export default TimePicker
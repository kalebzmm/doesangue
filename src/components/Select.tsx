import DropDown from "react-native-paper-dropdown";
import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import theme from '../core/theme'

const SelectOptions = ({ errorText, description, ...props }: any) => {

  const [showDropDown, setShowDropDown] = useState(false);

  const toggle = () => {
    setShowDropDown(!showDropDown);
  }

  return (
    <View style={styles.container}>
        <DropDown
            mode={"outlined"}
            visible={showDropDown}
            showDropDown={toggle}
            onDismiss={toggle}
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


export default SelectOptions
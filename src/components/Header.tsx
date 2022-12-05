import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import theme from '../core/theme'

const Header = (props: any) => {
  return <Text style={styles.header} {...props} />
}

const styles = StyleSheet.create({
  header: {
    fontSize: 35,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
})

export default Header
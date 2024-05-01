import React from 'react'
import { View, Text, StyleSheet,ImageBackground } from 'react-native'
import { Form } from 'formik'
import LoginForm from './LoginForm'

export default function Login() {
  return (
    <ImageBackground
      source={require('../../assets/images/conver.jpg')}
      style={loginStyles.background_img}
    >
    <View
    style={loginStyles.main_container}
    >
        <LoginForm />
    </View>
    </ImageBackground>
  )
}

const loginStyles = StyleSheet.create({
  background_img: {
    // flex: 1,
    resizeMode: 'cover'
  },
  main_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  }
})

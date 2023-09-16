import { SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import LoginForm from '../components/Auth/LoginForm';
import UserData from '../components/Auth/UserData';

export default function AccountScreen() {

  const auth = null;

  return (
    <View>
      {auth ? <UserData></UserData> : <LoginForm></LoginForm>}
    </View>
  )
}
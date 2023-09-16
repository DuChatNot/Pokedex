import { View, Text, StyleSheet, TextInput, Button, Keyboard } from 'react-native'
import React from 'react'
import {useFormik} from 'formik';
import * as yup from 'yup';

export default function LoginForm() {

  const valSchema = yup.object().shape({
    username: yup.string().required('Username missing'),
    password: yup.string().required('Password missing'),
  })

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: valSchema,
    validateOnChange: false,
    onSubmit: (formValue) => {
      console.log(formValue)
    }
  })

  return (
    <View>
      <Text style={styles.title}>Login</Text>
      <TextInput 
      placeholder='User'
      style={styles.input}
      autoCapitalize='none'
      value={formik.values.username}
      onChangeText={(text) => formik.setFieldValue('username', text)}
      />

      <TextInput 
      placeholder='Password'
      style={styles.input}
      autoCapitalize='none'
      secureTextEntry={true}
      value={formik.values.password}
      onChangeText={(text) => formik.setFieldValue('password', text)}
      />

      <Button title='Login' onPress={formik.handleSubmit}/>

      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
    </View>
  )
}

function initialValues () {
  return {
    username: '',
    password: ''
  };
};

const styles = StyleSheet.create({
  title:{
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error: {
    textAlign: 'center',
    color: '#f00',
    marginTop: 20
  }
})
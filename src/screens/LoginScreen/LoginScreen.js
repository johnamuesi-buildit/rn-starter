import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import {
  List,
  ListItem,
  Card,
  CardItem,
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Form,
  Item,
  Input,
  Label,
  Picker,
  Text
} from 'native-base';
import { connect } from 'react-redux'  

import { withFormik } from 'formik'
import * as Yup from 'yup';

const LoginForm = ({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => {
  log(JSON.stringify(errors));
  return (
  <Container>
    <Header>
      <Left />

      <Body>
        <Title>Login</Title>
      </Body>
      <Right />
    </Header>
    <Content padder>
      <Form 
       onSubmit={handleSubmit}
      >
        >
        <Item floatingLabel>
          <Label>Email</Label>
          <Input
            name={'email'}
            value={values.email}
            onChangeText={handleChange('email')}
            autoCapitalize="none"
          />
        </Item>
        <Item floatingLabel last>
          <Label>Password</Label> 
          <Input
            secureTextEntry
            name={'password'}
            value={values.password}
            onChangeText={handleChange('password')}
          />
        </Item>
        <Item>
          <Button disabled={isSubmitting}
           large onPress={handleSubmit}>
            <Text>Login</Text>
          </Button>
        </Item>
      </Form>
      {touched.email && errors.email && <Text>{errors.email}</Text> }
      {touched.password && errors.password && <Text>{errors.password}</Text> }
    </Content>
  </Container>
)}

const FormikLoginForm = withFormik({
  mapPropsToValues ({ email, password }) {
    return {
      email: email || '',
      password: password || ''
    }
  },
  handleSubmit (values, {resetForm, setErrors, setSubmitting}) {
    console.log(values)
    // mock
    setTimeout(() => {
      if(values.email === 'jeff@best.com'){
        setErrors({email:'Jeff already in the system!!'})
      } else{
          resetForm()
      }
      setSubmitting(false)
    }, 3000)
  },
 
  validationSchema : Yup.object().shape({
    email: Yup.string().email('Email is not valid').required('Email is required'),
    password: Yup.string().min(8, 'Password must be 8 characters or longer').required('Password is required')
  }),
})(LoginForm)

class LoginScreen extends Component {
  render () {
    return <FormikLoginForm />
  }
}
export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

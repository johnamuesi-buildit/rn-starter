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
} from 'native-base'

import { withFormik }  from 'formik'
import Yup from 'yup'
import { Formik } from 'formik';

const LoginForm = ({
    values,
    handleChange,
    handleSubmit
}) => (
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
                onSubmit={values => console.log(values)}>
>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input 
          name={'email'}
           value={values.email}
           onChangeText={handleChange('email')}    
           />
        </Item>
        <Item floatingLabel last>
          <Label>Password</Label>
          <Input secureTextEntry
          name={'password'}
            value={values.password}
           onChangeText={handleChange('password')}    />
        </Item>
        <Item>
          <Button large 
            onPress={handleSubmit}
          >
            <Text>Login</Text>
          </Button>
        </Item>
      </Form>
    </Content>
  </Container>
);

const FormikLoginForm = withFormik({
   mapPropsToValues({email, password}){
       return{
           email: email || '',
           password: password || ''
       }
   },
   handleSubmit(values){
       console.log(values)
   }
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

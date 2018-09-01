import React, { Component } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
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
  Label,
  Picker,
  Text
} from 'native-base'
import { withFormik } from 'formik'
import * as Yup from 'yup'

import FormInput from '../../components/Form/Input'

import { loginRequest } from '../../redux/actions'
import store from '../../redux/store'

class LoginFormScreen extends Component {
  render () {
    const { height: screenHeight } = Dimensions.get('window')

    return (
      <Container>
        <Header>
          <Left />

          <Body>
            <Title>Login Screen</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <View
          >
            <FormInput label="email"/>
            <FormInput label="password"/>
            <FormInput label="confirm password"/>
          
            <Button block> Login </Button>
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    justifyContent: 'center'
  }
})

export default LoginFormScreen

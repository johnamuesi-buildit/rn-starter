import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, Alert } from 'react-native'
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
import { Formik } from 'formik'
import * as Yup from 'yup'

import FormInput from '../../components/Form/Input'

import { loginRequest } from '../../redux/actions'
import store from '../../redux/store'

class LoginFormScreen extends Component {
  _handleSubmit = values => {
    setTimeout(() => Alert.alert(JSON.stringify(values)), 10)
  }
  render() {
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
          <Formik
            initialValues={{ email: '', password: '', confirmPassword: '' }}
            onSubmit={this._handleSubmit}
            validationSchema={Yup.object().shape({
                email: Yup.string()
                .email('Not a valid email')
                .required('Email is required'),
                password: Yup.string().min(6).required()
            })}
            render={({ values, handleSubmit, setFieldValue, errors, touched, setFieldTouched }) => (
              <React.Fragment>
                <View>
                  <FormInput
                    label="email"
                    value={values.email}
                    name="email"
                    onChange={setFieldValue}
                    onTouch={setFieldTouched}
                    error={touched.email && errors.email}
                  />
                  <FormInput
                    label="password"
                    secureTextEntry
                    value={values.password}
                    name="password"
                    onChange={setFieldValue}
                    onTouch={setFieldTouched}
                    error={touched.password && errors.password}
                  />
                  <FormInput
                    label="confirm password"
                    secureTextEntry
                    value={values.confirmPassword}
                    name="confirmPassword"
                    onChange={setFieldValue}
                    onTouch={setFieldTouched}
                    error={touched.confirmPassword && errors.confirmPassword}
                  />

                  <Button
                    block
                    style={styles.loginButton}
                    onPress={handleSubmit}
                  >
                    <Icon name="ios-lock" />
                    <Text>Login</Text>
                  </Button>
                </View>
              </React.Fragment>
            )}
          />
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
  },
  loginButton: {
    marginTop: 10,
    width: '80%',
    alignSelf: 'center'
  }
})

export default LoginFormScreen

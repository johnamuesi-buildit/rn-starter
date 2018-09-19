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

const api = user => {
  console.log('SUBMITTING: ', user.email)
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user.email === 'test@test.com') {
        alert('Email already in use')
      } else {
        resolve()
      }
    }, 3000);
  })
}

class LoginFormScreen extends Component {
  _handleSubmit = async (values, bag) => {
    try {
      api(values);
      this.props.loginRequest(values);
      setTimeout(() => {
        if (values.email === 'jeff@best.com') {
          bag.setErrors({ email: 'Jeff already in the system!!' })
        } else {
          Alert.alert('Logged in')
          bag.resetForm()
        }
        bag.setSubmitting(false)
      }, 3000)
    } catch (error) {
      console.log(error)
    }
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
              password: Yup.string()
                .min(6)
                .required('Password is required'),
              confirmPassword: Yup.string()
                .oneOf(
                  [Yup.ref('password', null)],
                  'Confirm password must match password'
                )
                .required('Please confirm your password')
            })}
            render={({
              values,
              handleSubmit,
              setFieldValue,
              errors,
              touched,
              setFieldTouched,
              isValid,
              isSubmitting,
              setErrors
            }) => (
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
                    disabled={!isValid || isSubmitting}
                    
                  >
                    <Icon name="ios-lock" />
                    <Text>Login</Text>
                  </Button>
                  {touched.email && errors.email && <Text>{errors.email}</Text>}
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

const mapDispatchToProps = dispatch => (bindActionCreators({
  loginRequest
}, dispatch));

export default connect(
  null,
  mapDispatchToProps
)(LoginFormScreen)
// export default LoginFormScreen

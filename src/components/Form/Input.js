import React, { PureComponent } from 'react'
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
  Label,
  Picker,
  Text,
  Input
} from 'native-base'
class FormInput extends PureComponent {
  render () {
    return (
      <View >
        <Item floatingLabel>
          <Label>Label</Label>
          <Input autoCapitalize="none" style={styles.textInput}/>
        </Item>
        <Text style={styles.error}>Error</Text>
      </View>
    )
  }
}
export default FormInput

const styles = StyleSheet.create({
  error: {
   color:'red'
  },
  textInput:{
      marginBottom: 5,
  }
})

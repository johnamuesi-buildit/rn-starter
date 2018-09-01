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
  state = {}

  _handleChange = (value) => {
    this.props.onChange(this.props.name, value)
  }
  _handleTouch = () => {
    this.props.onTouch(this.props.name);
  }

  render() {
    const { label, error, ...rest } = this.props
    return (
      <View>
        <Item floatingLabel>
          <Label>{label}</Label>
          <Input
            onChangeText={this._handleChange}
            autoCapitalize="none"
            onBlur={this._handleTouch}
            style={styles.textInput}
            autoCapitalize="none"
            {...rest}
          />
        </Item>
        <Text style={styles.error}>{error}</Text>
      </View>
    )
  }
}
export default FormInput

const styles = StyleSheet.create({
  error: {
    color: 'red'
  },
  textInput: {
    marginBottom: 5
  }
})

import React, { Component } from 'react'
import {View, } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';


class ContactScreen extends Component{
    render(){
        return(
            <Container>
            <Header>
              <Left/>
               
              <Body>
                <Title>Contact</Title>
              </Body>
              <Right />
            </Header>
            <Content>
              <Text>
                This is Content Section
              </Text>
            </Content>
         
          </Container>
        );
    }
}
export  {ContactScreen};
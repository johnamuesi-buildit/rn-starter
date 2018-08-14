import React, { Component } from 'react'
import {View, } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

class HomeScreen extends Component{

    
    render(){
        return(
            <Container>
            <Header>
              <Left/>
               
              <Body>
                <Title>Home</Title>
              </Body>
              <Right />
            </Header>
            <Content>
              <Text>
                This is Content Section
              </Text>
            </Content>
            <Footer>
              <FooterTab>
                <Button full>
                  <Text>Footer</Text>
                </Button>
              </FooterTab>
            </Footer>
          </Container>
        );
    }
}
export  {HomeScreen};
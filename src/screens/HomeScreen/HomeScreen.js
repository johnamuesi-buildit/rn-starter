import React, { Component } from 'react'
import {View, } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {COLOURS} from '../../theme';

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
              <Text style={{color:COLOURS.secondary}}>
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
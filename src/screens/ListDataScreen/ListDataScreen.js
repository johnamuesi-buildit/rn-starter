 
import React, { Component } from 'react'
import { StyleSheet, View,  } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';


class ListDataScreen extends Component{
    render(){
        return(
            <Container>
            <Header>
              <Left/>
               
              <Body>
                <Title>Transactions</Title>
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
export  {ListDataScreen};
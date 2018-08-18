import React, { Component } from 'react'
import {View, } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

// import initialState from '../../redux/store/initialState.json';
// let state = initialState;
import store from '../../redux/store'

class HomeScreen extends Component{

  componentDidMount(){
    // console.log(`
    //     Initial State
    //     ================
    //     errors: ${JSON.stringify(state.errors)}
    //     loanBalances: ${JSON.stringify(state.loanBalances)}
    // `);
    console.log(store.getState());
  }

//TODO:
    
    /**
     *
     *
     * @returns
     * @memberof HomeScreen
     */
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
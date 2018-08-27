import React, { PureComponent } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import {List, ListItem,Item, Card, CardItem, Container, Header, Title, Content,  Button, Left, Right, Body, Icon, } from 'native-base';
import {TaskComponent} from '../../components/TaskComponent';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  getCurrentUserInfo,
  getCurrentUserInfoSuccess,
  getTransactions
} from '../../redux/actions/'
import store from '../../redux/store';
class TasksScreen extends PureComponent {

  componentDidMount(){
   log("PROPS", this.props);
   this.props.getUser('U100NorbertLeader')
  }

    render() {

        return (
            <Container>
            <Header>
              <Left/>
               
              <Body>
                <Title>Loan Balances</Title>
              </Body>
              <Right />
            </Header>
            <Content padder
              contentContainerStyle={styles.container}>
             
          
              <Card 
                style={{flex:1}}
              >
                <Button
                  onPress={()=> this.props.moreTransactions()}
                >
                  <Text>
                    Get more transactions
                  </Text>
                </Button>
                <Text> Name:{this.props.user.firstName} </Text>
                  <Text> Name:{this.props.user.lastName} </Text>
                
                 
                  <Content> 
                  {
                      //loop the
                      this.props.loanBalances.map((balance, index) => {
                        return(
                          
                          <Card key={index} 
                          style={styles.balanceDetails}>
                          key={index}>
                 
                          <Text>School: {balance.School}</Text> 
                          <Item><Text>Amount: {balance.amount}</Text></Item>
                          <Item><Text>Completed: {balance.completed}</Text></Item>
                          <Item><Text>id: {balance.id}</Text></Item>
                          
                          </Card>
                      
                        )
                      })
                  } 
                  </Content>
              </Card>
            </Content>
          </Container>
        );
    }
}

const mapStateToProps = (state) => {
  // console.log("STATE!!!!", state)
  return {
    user: state.user.currentUser,
    loanBalances:state.loanBalances
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  //  getUser: () => (dispatch(getCurrentUserInfo()))
  // getCurrentUserInfo: () => bindActionCreators(getCurrentUserInfo, dispatch)
   getUser : (user) => {
     dispatch(getCurrentUserInfo(user))
   },
   moreTransactions: () => {
     dispatch(getTransactions())
   }
   

  }
}

export  default  connect(mapStateToProps, mapDispatchToProps)(TasksScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    balanceDetails:{
      alignItems: 'flex-start',
      padding:10,
    }
});
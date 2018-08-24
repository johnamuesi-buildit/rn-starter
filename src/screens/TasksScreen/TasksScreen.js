import React, { PureComponent } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import { Container, Header, Title, Content,  Button, Left, Right, Body, Icon, } from 'native-base';
import {TaskComponent} from '../../components/TaskComponent';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  getCurrentUserInfo,
  getCurrentUserInfoSuccess
} from '../../redux/actions/'
import store from '../../redux/store';
class TasksScreen extends PureComponent {

  componentDidMount(){
 //   store.dispatch(getCurrentUserInfo('jefflovessaga'));
    // console.log("THE PROPS", this.props);
   this.props.getUser('U100NorbertLeader')
  }


    render() {

        return (
            <Container>
            <Header>
              <Left/>
               
              <Body>
                <Title>Demo Shaun</Title>
              </Body>
              <Right />
            </Header>
            <Content>
          yar
              <View style={styles.container}>
                  <Text> Name:{this.props.user.firstName} </Text>
                  <Text> Name:{this.props.user.lastName} </Text>
                  <Text> Loan Balances: </Text>
                  <Text> List:
                  {
                      //loop the
                  } 
                  </Text>
              </View>
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
   }

  }
}

export  default  connect(mapStateToProps, mapDispatchToProps)(TasksScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
     
    }
});
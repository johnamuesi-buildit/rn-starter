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
import {getCurrentUserInfo} from '../../redux/actions/'
import store from '../../redux/store';
class TasksScreen extends PureComponent {

  componentDidMount(){
    store.dispatch(getCurrentUserInfo('jefflovessaga'));
    console.log("THE PROPS", this.props);
  }


    render() {

        return (
            <Container>
            <Header>
              <Left/>
               
              <Body>
                <Title>Tasks</Title>
              </Body>
              <Right />
            </Header>
            <Content>
          yar
              <View style={styles.container}>
                  <Text> Name:{this.props.user} </Text>
              </View>
            </Content>
          </Container>
        );
    }
}

const mapStateToProps = (state) => {
  console.log("STATE!!!!", state)
  return {
    user: state.user.currentUser
  }
}

const mapDispatchToProps = () => {

}

export  default  connect(mapStateToProps)(TasksScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
     
    }
});
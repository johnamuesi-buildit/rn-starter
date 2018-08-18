import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import { Container, Header, Title, Content,  Button, Left, Right, Body, Icon, } from 'native-base';
import TaskList from '../../components/TaskList';

import store from '../../redux/store';

store.dispatch({type: 'Hello Pheaa'})

const TASK_STATUSES = ['UnStarted', 'In Progress', 'Completed'];

class TasksScreen extends Component {

    renderTaskLsts(){
        const {tasks} = this.props;

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
                {this.renderTaskLsts()}
            </Content>
          </Container>
        );
    }
}
export  {TasksScreen};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
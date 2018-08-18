import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import { Container, Header, Title, Content,  Button, Left, Right, Body, Icon, } from 'native-base';
import {TaskComponent} from '../../components/TaskComponent';


const mockTasks = [                               
    {
      id: 1,
      title: 'Learn Redux',
      description: 'The store, actions, and reducers, oh my!',
      status: 'In Progress',
    },
    {
      id: 2,
      title: 'Peace on Earth',
      description: 'No big deal.',
      status: 'In Progress',
    },
  ];

class TasksScreen extends Component {

  


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
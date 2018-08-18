import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import { Container, Header, Title, Content,  Button, Left, Right, Body, Icon, } from 'native-base';
import TaskList from './TaskList';



const TASK_STATUSES = ['UnStarted', 'In Progress', 'Completed'];

class TaskComponent extends Component {

    renderTaskLists(){
        const {tasks} = this.props;
        return TASK_STATUSES.map(status => {
            const statusTasks = tasks.filter(task => {
                task.status === status
            })
            return <TaskList 
                        key={status}
                        status={status}
                        tasks={statusTasks}
                         />
        })

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
                {this.renderTaskLists()}
            </Content>
          </Container>
        );
    }
}
export  {TaskComponent};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
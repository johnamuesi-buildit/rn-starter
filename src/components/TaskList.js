import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import Task from './Task'

/**
 *
 *
 * @param {*} props
 */
const TaskList = (props) => (
    <View style={styles.container}>
        <Text>{props.status}</Text>
            {props.task.map(task => (
                <Task key={task.id} task={task}/>
            ))}
    </View>
    )
export default TaskList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
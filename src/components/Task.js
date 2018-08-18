import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

const Task = (props) => (
    <View style={styles.container}>
        <Text>{props.task.title}</Text>
    </View>
    )
export default Task;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
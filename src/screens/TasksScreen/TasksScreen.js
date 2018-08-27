import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'

import {
  List,
  ListItem,
  Item,
  Card,
  CardItem,
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon
} from 'native-base'
import { TaskComponent } from '../../components/TaskComponent'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  getCurrentUserInfo,
  getCurrentUserInfoSuccess,
  getTransactions,
  confirmationLoadMore,
  getTasks
} from '../../redux/actions/'
import store from '../../redux/store'
class TasksScreen extends PureComponent {
  componentDidMount() {
    log('PROPS', this.props)
    this.props.getUser('U100NorbertLeader')
  }

  state = { isVisible: false }; 

  renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.modalButton}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity> 
  )

  renderModalContent = () => (
    <View style={styles.modalContent}>
      <Button
      onPress={this.handleConfirm}>
      <Text>Confirm!</Text>
      </Button>
      {this.renderButton('Close', () => this.setState({ isVisible: false }))}
    </View>
  )

  handleLoadMore = () => {
    this.props.moreTransactions();
    this.setState({
      isVisible:true
    })
  }

  handleConfirm = () => {
    this.props.loadConfirmation();
    this.setState({
      isVisible:false
    })
  }

  render() {
    return (
      <Container>
        <Header>
          <Left />

          <Body>
            <Title>Loan Balances</Title>
          </Body>
          <Right />
        </Header>
        <Content padder contentContainerStyle={styles.container}>
          <Card style={{ flex: 1 }}>
            <Button onPress={() => this.handleLoadMore()}>
              <Text>Get more transactions</Text>
            </Button>
            <Button onPress={() => this.props.loadTasks()}>
              <Text>Load Tasks </Text>
            </Button>
            <Text> Name:{this.props.user.firstName} </Text>
            <Text> Name:{this.props.user.lastName} </Text>

            <Content>
              {//loop the
              this.props.loanBalances.map((balance, index) => {
                return (
                  <Card key={index} style={styles.balanceDetails}>
                    key={index}>
                    <Text>School: {balance.School}</Text>
                    <Item>
                      <Text>Amount: {balance.amount}</Text>
                    </Item>
                    <Item>
                      <Text>Completed: {balance.completed}</Text>
                    </Item>
                    <Item>
                      <Text>id: {balance.id}</Text>
                    </Item>
                  </Card>
                )
              })}
            </Content>
          </Card>
          <Modal
          backdropOpacity={0.3}
          animationIn="zoomInDown"
          animationOut="zoomOutUp"
          animationInTiming={1000}
          animationOutTiming={1000}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={1000}
            isVisible={this.state.isVisible}
            style={styles.modalStyle}
          >
            {this.renderModalContent()}
          </Modal>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  // console.log("STATE!!!!", state)
  return {
    user: state.user.currentUser,
    loanBalances: state.loanBalances,
    transactions: state.transactions,
    tasks: state.tasks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    //  getUser: () => (dispatch(getCurrentUserInfo()))
    // getCurrentUserInfo: () => bindActionCreators(getCurrentUserInfo, dispatch)
    getUser: user => {
      dispatch(getCurrentUserInfo(user))
    },
    loadConfirmation: () => {
      dispatch(confirmationLoadMore())
    },
    moreTransactions: () => {
      dispatch(getTransactions())
    },
    loadTasks: () => {
      dispatch(getTasks())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  balanceDetails: {
    alignItems: 'flex-start',
    padding: 10
  },
  modalStyle:{
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  modalButton: {
    backgroundColor: "lightblue",
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
})

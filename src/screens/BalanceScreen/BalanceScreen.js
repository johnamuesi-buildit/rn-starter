import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';


import { Path } from 'react-native-svg'
import { AreaChart, Grid, LineChart, ProgressCircle } from 'react-native-svg-charts'
import * as shape from 'd3-shape'


class BalanceScreen extends Component {
    render() {
  
      const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
      const dataLineChart = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
  
      const Line = ({ line }) => (
          <Path
              key={'line'}
              d={line}
              stroke={'rgb(134, 65, 244)'}
              fill={'none'}
          />
      )
  
      return (

        <Container>
        <Header>
          <Left/>
           
          <Body>
            <Title>My Balance</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
        <View>
          <AreaChart
              style={{ height: 200 }}
              data={data}
              contentInset={{ top: 30, bottom: 30 }}
              curve={shape.curveNatural}
              svg={{ fill: 'rgba(134, 65, 244, 0.2)' }}
          >
              <Grid/>
              <Line/>
          </AreaChart>
          <LineChart
                  style={{ height: 200 }}
                  data={ dataLineChart }
                  svg={{ stroke: 'rgb(134, 65, 244)' }}
                  contentInset={{ top: 20, bottom: 20 }}
              >
                  <Grid/>
              </LineChart>
              <ProgressCircle
                  style={ { height: 200 } }
                  progress={ 0.7 }
                  progressColor={'rgb(134, 65, 244)'}
              />
        </View>
        </Content>
        
      </Container>




       
          
      )
  }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
export  {BalanceScreen};
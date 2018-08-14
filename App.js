// console.disableYellowBox = true;

 
// import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';


// import { Path } from 'react-native-svg'
// import { AreaChart, Grid, LineChart, ProgressCircle } from 'react-native-svg-charts'

// import * as shape from 'd3-shape'

// export default class App extends React.Component {
//   render() {

//     const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
//     const dataLineChart = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

//     const Line = ({ line }) => (
//         <Path
//             key={'line'}
//             d={line}
//             stroke={'rgb(134, 65, 244)'}
//             fill={'none'}
//         />
//     )

//     return (
//       <View>
//         <AreaChart
//             style={{ height: 200 }}
//             data={data}
//             contentInset={{ top: 30, bottom: 30 }}
//             curve={shape.curveNatural}
//             svg={{ fill: 'rgba(134, 65, 244, 0.2)' }}
//         >
//             <Grid/>
//             <Line/>
//         </AreaChart>
//         <LineChart
//                 style={{ height: 200 }}
//                 data={ dataLineChart }
//                 svg={{ stroke: 'rgb(134, 65, 244)' }}
//                 contentInset={{ top: 20, bottom: 20 }}
//             >
//                 <Grid/>
//             </LineChart>
//             <ProgressCircle
//                 style={ { height: 200 } }
//                 progress={ 0.7 }
//                 progressColor={'rgb(134, 65, 244)'}
//             />
//             <Io
//       </View>
        
//     )
// }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



import React, {Component} from 'react';


import RootNavigation from './src/navigation/RootNavigation'

export default class App extends Component {
  render () {
    return <RootNavigation />
  }
}

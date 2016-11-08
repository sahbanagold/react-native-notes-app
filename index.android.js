/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 import React, {
     Component
 } from 'react';
 import {
     AppRegistry,
     StyleSheet,
     Text,
     View,
     TouchableHighlight,
     Navigator
 } from 'react-native';
 import SearchScreen from './SearchScreen'


 export default class PersonalNote extends Component {
     render() {       
         return ( <Navigator style={styles.container}
           renderScene={(route, navigator) =>
        <SearchScreen />
      }
           initialRoute={{title: 'Personal Note'}}
         />


         );
     }
 }

 const styles = StyleSheet.create({
     container: {
         flex: 1,
         backgroundColor: 'white'
     }
 });

 AppRegistry.registerComponent('PersonalNote', () => PersonalNote);

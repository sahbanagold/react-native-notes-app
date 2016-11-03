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
    NavigatorIOS
} from 'react-native';
import SearchScreen from './SearchScreen'

export default class PersonalNote extends Component {
    render() {
        return ( <
            NavigatorIOS style = {
                styles.container
            }
            initialRoute = {
                {
                    title: 'Personal Note',
                    component: SearchScreen
                }
            } >

            <
            /NavigatorIOS>
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

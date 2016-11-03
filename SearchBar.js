'use strict'
import React, {
    Component
} from 'react'
import {
    ActivityIndicator,
    TextInput,
    StyleSheet,
    Text,
    View
} from 'react-native'
export default class SearchBar extends Component {
    render() {
        return ( <View style = {
                styles.SearchBar
            }>
            <TextInput autoCapitalize = "none"
            autoCorrect = {false}
            onChange = {this.props.onSearchChange}
            placeholder = 'search a notes...'
            onFocus = {this.props.onFocus}
            style = {styles.SearchBarInput}/>
            <ActivityIndicator animating = {this.props.isLoading}
            style = {styles.spinner}/> < /View >
        )
    }
}
var styles = StyleSheet.create({
    searchBar: {
        marginTop: 64,
        padding: 3,
        paddingLeft: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    SearchBarInput: {

    }
})

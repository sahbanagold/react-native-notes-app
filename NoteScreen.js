import React, {
    Component
} from 'react'
import ReactNative, {
    ListView,
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight
}
from 'react-native'
export default class NoteScreen extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
          <TouchableHighlight>
            <ScrollView contentContainerStyle = {
                styles.contentContainer
            } >
            <View style = {
                styles.mainSection
            }>
            <Image source = 'https://source.unsplash.com/random/100x100'
            style = {styles.detailsImage}/>
            <View >
            <Text style = {styles.rightPane} > {this.props.note.title}
            </ Text >
            </ View >
            <View style = {styles.separator}/>
            <Text > {this.props.note.content} < /Text>
            <View style = {styles.separator}/>
            </ View >
            </ ScrollView >
            </ TouchableHighlight>
        )
    }
}
const styles = StyleSheet.create({
    contentContainer: {
        padding: 10
    },
    rightPane: {
        justifyContent: 'space-between',
        flex: 1
    },
    noteTitle: {
        flex: 1,
        fontSize: 16,
        fontWeight: '500'
    },
    mainSection: {
        flexDirection: 'row'
    },
    detailsImage: {
        width: 100,
        height: 100,
        backgroundColor: '#eaeaea',
        marginRight: 10
    },
    centerText: {
        alignItems: 'center'
    },
    NoNotesText: {
        marginTop: 80,
        color: '#888888'
    },
    separator: {
        backgroundColor: 'rgba(0,0,0, 0.1)',
        height: StyleSheet.hairlineWidth,
        marginVertical: 10
    },
    scrollSpinner: {
        marginVertical: 20
    },
    rowSeparator: {
        backgroundColor: 'rgba(0,0,0, 0.1)',
        height: 1,
        marginLeft: 4
    },
    rowSeparatorHide: {
        opacity: 0.0
    }
})

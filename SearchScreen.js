import React, {Component} from 'react'
import ReactNative, {
    ListView,
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight
} from 'react-native'
import NoteScreen from './NoteScreen'
import NoteCell from './Notecell'
import NoNotes from './NoNotes'
import SearchBar from './SearchBar'
import configNote from './config.note'
//export deafault
export default class SearchScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            filter: '',
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        }
    }
    _urlForQueryAndPage(query) {
        if (query) {
          console.log(configNote.host,"hostttttttttttttt");
            return `${configNote.host}`
        } else {
            return `${configNote.host}`
        }
    }
    componentDidMount() {
        this.searchNotes('')
    }
    getDataSource(notes: Array < any > ): ListView.DataSource {
        return this.state.dataSource.cloneWithRows(notes)
    }
    searchNotes(query: string) {
        this.setState({
            filter: query
        })
        let testurl = this._urlForQueryAndPage(query)
        fetch(testurl)
            .then((response) => {
                return response.json()
            })
            .catch((error) => {
                this.setState({
                    dataSource: this.getDataSource([]),
                    isLoading: false
                })
            }).then((notes) => {
                if (this.state.filter !== query) {
                    return
                }
                this.setState({
                    isLoading: false,
                    dataSource: this.getDataSource(notes.data.notes)
                })

                console.log(notes.data.notes);
            })
    }
    onSearchChange(event: Object) {
        let filter = event.nativeEvent.text.toLowerCase()

        console.log('execetu 11111111111111111111111');
        this.searchNotes(filter)
    }
    selectNote(note: Object) {
        if (Platform.OS === 'ios') {
            this.props.navigator.push({
                title: note.title,
                component: NoteScreen,
                passProps: {
                    note
                }
            })
        }
    }
    renderSeparator(sectionID: number | string,
        rowID: number | string,
        adjacentRowhHighlighted: boolean) {
        let style = styles.rowSeparator
        if (adjacentRowhHighlighted) {
            style = [style, styles.rowSeparatorHide]
        }
        return (
          <View key = {'SEP_' + sectionID + '_' + rowID}
            style = {style} />
        )

    }
    renderRow(note: Object, sectionID: number | string,
        rowID: number | string,
        highlightRowFunc: (sectionID: ?number | string, rowID : ?number | string) => void,) {
          console.log(note,"noteeeeeeeeeeeeeeeeeeeeeeeeeeee");
        return (<NoteCell key = {note.id}
        onSelect = {() => this.selectNote(note)}
        onHighlight = {() => highlightRowFunc(sectionID, rowID)}
        onUnHighlight = {() => highlightRowFunc(null, null)}/>)
    }

    render() {

        let content = this.state.dataSource.getRowCount() === 0 ? <NoNotes filter = {this.state.filter} isLoading = {this.state.isLoading}/>
            :
            <ListView ref = 'listview'
            renderSeparator = { this.renderSeparator }
            dataSource = {this.state.dataSource}
            renderRow = {this.renderRow}
            automaticallyAdjustContentInsets = {false}
            keyboardDismissMode = 'on-drag'
            keyboardShouldPersistTaps = {true}
            showsVerticalScrollIndicator = {false} />
          console.log(this.state.dataSource,"this dataSource");
        return ( <View style = {
                styles.container
            } >
            <SearchBar onSearchChange = {this.onSearchChange.bind(this)}
            isLoading = {this.state.isLoading}
            onFocus = {() => this.refs.listview && this.refs.listview.getScrollResponder().scrollTo({x: 0,y: 0})} />
            <View style = { styles.separator } / >
          {content}

            </ View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    centerText: {
        alignItems: 'center'
    },
    NoNotesText: {
        marginTop: 80,
        color: '#888888'
    },
    separator: {
        backgroundColor: '#eee',
        height: 1

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

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, SafeAreaView, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native';

import Item from '../components/Item';

const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=negeri%20lima%20menara&printType=books&startIndex=0&maxResults=40&key=AIzaSyCKa0du77gr3Aanu4tagrZkFZaayUy3J5M";

export default class App extends React.Component {

    constructor(){
        super();
        this.state = {
        booksData: {}
        };
    }

    componentDidMount() {
        this.getAllBooks();
    }

    getAllBooks() {
        fetch(BASE_URL)
            .then((response) => response.json())
            .then((json) => this.setState({
                booksData: json
            })
            )
            .catch((error) => console.log(error));
    }

    
    render() {
        const {booksData} = this.state;
        const {navigation} = this.props;

        return(
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor={'white'}/>
                
                <View style={styles.fixToText}>
                    <Text style={styles.judul}>Book Recommendations</Text>
                    <View style={styles.btnSize}>
                        <Button
                            title="Newest Book"
                            onPress={() => navigation.navigate("NewestList")}
                        />
                    </View> 
                </View>
                <View style={{ flex : 1 }}>
                <FlatList
                        data = {booksData.items}
                        renderItem = {(book) =>
                            <TouchableOpacity onPress={() => navigation.navigate("Detail", book.item)}>
                                <Item book = {book.item}/>
                            </TouchableOpacity>}
                        keyExtractor={(item, index) => (`${item}--${index}`)}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        paddingTop: 30,
        paddingHorizontal:20,
        backgroundColor : '#edf0f5',
        flex: 1
    },
    judul : {
        fontSize: 17,
        marginTop: 5,
        fontWeight: 'bold'
    },
    btnSize : {
        width: "35%", 
        marginBottom: 7  
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});
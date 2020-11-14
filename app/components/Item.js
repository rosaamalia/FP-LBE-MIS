import React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class Item extends Component {
    
    render()
    {
        let book = this.props.book;
        //let gambar = book.volumeInfo.imageLinks.thumbnail;
        let gambar = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://books.google.co.id/googlebooks/images/no_cover_thumb.gif";
            return (
                <View style = {styles.container}>
                    <View style={styles.buku}>
                        <View style={{ flexDirection: 'row'}}>
                            <View style={styles.box_title}>
                                <Text style={{ paddingBottom: 5, fontSize: 18 }}>{book.volumeInfo.title}</Text>
                                <Text style={{ fontSize: 15 }}>{book.volumeInfo.authors}</Text>
                            </View>
                            <View>
                                <Image source={{ uri : gambar }} style={styles.cover}/>
                            </View> 
                        </View>
                    </View>
                </View>
            );
    }
}

const styles = StyleSheet.create({
    buku : {
        width : '100%',
        height : 170,
        backgroundColor : 'white',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    box_title : {
        width : '69%',
        padding: 20
    },
    container : {
        flex : 1,
        marginBottom: 10,
        alignItems : "baseline"
    },
    cover : {
        height: '100%',
        width: 100,
        marginRight: 0,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    }
});
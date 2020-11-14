import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';

export default class Detail extends React.Component {
    render() {
        const {route} = this.props;

        return (
            <ScrollView style={{ backgroundColor : '#edf0f5' }}>
                <View style={styles.container_title}>
                    <Image source={{ uri: route.params.volumeInfo.imageLinks.thumbnail }} style={styles.cover}/>
                    <Text style={{ paddingTop: 15, fontSize: 16 }}>Kategori: {route.params.volumeInfo.categories}</Text>
                    <Text style={styles.judul}>{route.params.volumeInfo.title}</Text>
                    <Text style={{ fontSize: 15, paddingTop: 10 }}>Penulis: {route.params.volumeInfo.authors}</Text>
                </View>
                <View style={styles.container_desc}>
                    <Text style={{ fontSize: 17, textAlign: 'justify' }}>{route.params.volumeInfo.description}</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container_title : {
        paddingTop: 50,
        alignItems: 'center',
        flex: 0
    },
    container_desc : {
        flex: 1,
        textAlign: 'justify',
        paddingTop: 20,
        paddingHorizontal: 40
    },
    cover : {
        height: 300,
        width: 200
    },
    judul : {
        fontWeight: 'bold',
        fontSize: 20,
        paddingTop: 10,
        paddingHorizontal: 50,
        textAlign: 'center'
    }
})
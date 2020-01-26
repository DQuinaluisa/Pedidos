import React, { Component } from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text } from 'react-native';
import { Container, Content, Card, CardItem, Body, Item, Label, Input, Button } from 'native-base';


export default class Register extends Component {
    
    render() {
        return (
           

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center'

    },
    registrar1: {
        flex: 1,
        width: '100%',
        marginTop: '45%',
        fontFamily: 'bign-font',
        fontSize: 30,
        marginLeft: '5%',
        color: '#EFFBF8',

    },
    registrar2: {
        flex: 1,
        width: '100%',
        marginTop: '45%',
        fontSize: 30,
        marginLeft: '5%',
        color: '#EFFBF8',

    },
    content: {
        flex: 1,
        justifyContent: 'center',
        width: '75%',
        height: '100%',
        marginLeft: '13%',
        paddingBottom: '25%',


    },
    card: {
        backgroundColor: '#013440',
        paddingBottom: '10%',


    },
    user1: {
        color: '#EFFBF8',
        fontSize: 25,
    
        fontFamily: 'bign-font',

    },
    user2: {
        color: '#EFFBF8',
        fontSize: 25,
        
    },
    clave1: {
        color: '#EFFBF8',
        fontSize: 25,
        fontFamily: 'bign-font',

    },
    clave2: {
        color: '#EFFBF8',
        fontSize: 25,
        
    

    },
    btn: {
        marginTop: '15%',
        marginLeft: '25%',
        backgroundColor: '#F2D0A7',
        width: '50%',
        justifyContent: 'center',

    },
    txt: {
        color: 'black',
        fontSize: 15,
    }

});

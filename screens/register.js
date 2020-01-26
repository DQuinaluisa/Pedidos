
import React, { Component } from "react";
import * as Font from 'expo-font';
import { StyleSheet, ImageBackground } from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Left, Body, Card, CardItem, Item, Input, Label, Text, TextInput } from "native-base";

export default class Login extends Component {

  state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            'lob-font': require('../assets/fonts/Lobster-Regular.ttf'),
            'sat-font': require('../assets/fonts/Satisfy-Regular.ttf'),
        });

        this.setState({ fontLoaded: true });
    }

  render() {
    return (
      <Container>
         <ImageBackground source={require('../assets/picks/fondo2.jpg')} style={styles.img}>      
          <Content contentContainerStyle={styles.content}>
            
              <CardItem style={styles.card}>
                <Body>
                  <Item fixedLabel>
                    <Label style={styles.text} >Nombre</Label>
                    <Input placeholder="Ingrese su Nombre" />
                  </Item>
                  <Item fixedLabel last>
                    <Label style={styles.text}>Correo</Label>
                    <Input placeholder="Ingrese su Correo"/>
                  </Item>
                  <Item fixedLabel last>
                    <Label style={styles.text1}>Contraseña</Label>
                    <Input placeholder="Ingrese su Contraseña"/>
                  </Item>
                  
                </Body>
              </CardItem>
            
          </Content>
          <Button rounded  style={styles.btn} success >
                    <Text>Registrarse</Text>
                  </Button>
        </ImageBackground> 
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    
    img : {
      flex: 1,
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        
    },

    container: {
        backgroundColor : '#646668',
        width: '100%',
        height: '35%',
        
    },

    content: {
        flex: 2,
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        paddingBottom: '15%',

       
          
    },

    card: {
      backgroundColor:'#D0D6D8',
        opacity: 0.8,
        paddingBottom: '10%',
        marginLeft: '3%',            
        marginRight: '3%', 
        borderRadius: 50,
    },

       text : {
      color : '#29B28D',
      paddingTop : '-5%',
      fontSize: 25,
      fontFamily: 'sat-font',
    },

    text1 : {
      color : '#29B28D',
      paddingTop : '-5%',
      fontSize: 23,
      fontFamily: 'sat-font',
    },

     btn: {
        marginTop: '1%',
        marginRight: '20%',
        marginLeft: '22%',
        backgroundColor: '#26C196',
        
        top: -200,
        justifyContent: 'center',
        alignItems: 'center',

    },



  })
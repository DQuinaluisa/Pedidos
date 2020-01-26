
import React, { Component } from "react";
import { StyleSheet, ImageBackground } from 'react-native';
import * as Font from 'expo-font';
import { Container, Header, Title, Content, Button, Icon, Left, Body, Card, CardItem, Item, Input, Label, Text } from "native-base";

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
      <Container >
        <ImageBackground source={require('../assets/picks/fondo.jpg')} style={styles.img}>
          <Header style={styles.container} >
            <Body >
              <Title style={styles.font} >Inicio de Sesion</Title>
            </Body>
          </Header>
          <Content contentContainerStyle={styles.content}>
            
              <CardItem style={styles.card}>
                <Body >
                  <Item fixedLabel>
                    <Label style={styles.text}>Usuario</Label>
                    <Input  placeholder="Ingrese su Usuario" />
                  </Item>
                  <Item fixedLabel last>
                    <Label style={styles.text} >Contraseña</Label>
                    <Input  placeholder="Ingrese su Contraseña" />
                  </Item>
                 
                </Body>

              </CardItem>
          </Content>
          
              <Button rounded  style={styles.btn} onPress={() => this.props.navigation.push('Inicio')}>
                        <Text style={styles.tex} >Ingresar</Text>
               </Button>
              
              <Button rounded  style={styles.btn2} success onPress={() => this.props.navigation.push('Registro')}>
                        <Text style={styles.tex} >Registrate</Text>
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

    font : {
      color : '#64CFEE',
      fontSize: 30,
      left: 30,
      fontFamily: 'sat-font',
      top : 6,
    },
   
    content: {
        flex: 2,
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        paddingBottom: '35%',

       
          
    },
    card: {
      backgroundColor:'#F1F6F7',
        opacity: 0.7,
        paddingBottom: '10%',
        marginLeft: '3%',            
        marginRight: '3%', 
        borderRadius: 50,
    },

    text : {
      color : '#096A8C',
      paddingTop : '-5%',
      fontSize: 20,
      fontFamily: 'sat-font',
    },

    input: {
        color: '#DEEBF0',
        fontSize: 25,
        paddingTop: '50%',
        fontFamily: 'sat-font',

    },
    btn: {
        marginTop: '1%',
        marginRight: '60%',
        marginLeft: '10%',
        backgroundColor: '#646668',
        
        top: -100,
        justifyContent: 'center',
        alignItems: 'center',

    },
    btn2: {
        marginTop: '1%',
        marginRight: '15%',
        marginLeft: '50%',
        backgroundColor: '#096A8C',
        
        top: -150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    tex : {
      fontFamily: 'lob-font',
    }


});

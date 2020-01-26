
import React, { Component } from 'react';
import * as Font from 'expo-font';
import { Image } from 'react-native';
import { StyleSheet, ImageBackground } from 'react-native';
import { Container, Header, Title, Content, Thumbnail, Button, Icon, Left, Body, Card, CardItem, Item, Input, Label, Text, TextInput } from "native-base";
export default class ACtualizar extends Component {

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
         <ImageBackground source={require('../assets/picks/fondo3.jpg')} style={styles.img}>
          
            <Content >
              
                <CardItem style={styles.nati}>
                  
                    <Thumbnail source={{ uri: 'Image URL' }} />
                    <Body>
                     
                        
                        <Item fixedLabel>
                          <Label style={styles.titulos} >Nombre Prducto</Label>
                          <Input placeholder="Ingrese el Nombre" />
                        </Item>

                    </Body>
                  
                </CardItem>

                <CardItem style={styles.detalle}>
                <Body>
                  <Item fixedLabel last>
                    <Label style={styles.titulos1}>Detalles</Label>
                    <Input placeholder="Detalles"/>
                  </Item>

                   <Item fixedLabel last>
                    <Label style={styles.titulos1}>Precio</Label>
                    <Input style={styles.inputs} placeholder="Ingrese Precio"/>
                  </Item>
                </Body>


                </CardItem>
                      <Button rounded  style={styles.btn} onPress={() => this.props.navigation.push('Inicio')}>
                        <Text style={styles.tex} >Publicar  </Text>
               </Button>
              
              <Button rounded  style={styles.btn2} success onPress={() => this.props.navigation.push('Registro')}>
                        <Text style={styles.tex} >Foto</Text>
               </Button>
                <CardItem style={styles.picture}>
                  <Body>
                    <Image source={{ uri: 'Image URL' }} style={{ height: 200, width: 200, flex: 1 }} />
                    <Text style={styles.titulos}>
                    
                    </Text>
                  </Body>
                </CardItem>
             
            </Content>
          </ImageBackground> 
      </Container>
    );
  }
}
const styles = StyleSheet.create({
 

     img : {
      flex: 1,   
      
      flexDirection: 'column',

    },

    container :{
      backgroundColor : '#646668',
      height: 70,
    },

    font : {
      color : '#64CFEE',
      fontSize: 30,
      left: 30,
      fontFamily: 'sat-font',
      top : 6,
    },
   
   

    nati :  {
       flex : 1,
      
       height: 100,
       top: 20,
       backgroundColor:'#D0D6D8',
        opacity: 0.8,
        borderRadius: 50,
    
      
    },

    picture : {
       flex : 1,
       
        height: 300,
         marginTop: 3,
        top: -90,
        
     },

      detalle : {
        flex : 1,
         
         height: 200,
         marginTop: 25,
         backgroundColor:'#D0D6D8',
        opacity: 0.8,
        borderRadius: 50,
    
        
     },
    
    titulos : {
      fontSize: 20,
      fontFamily: 'sat-font',
      color : '#0E43AD',

    },

    titulos1 : {
      fontSize: 20,
      fontFamily: 'sat-font',
      color : '#0E43AD',
      

    },

btn: {
        
        marginRight: '60%',
        marginLeft: '10%',
        backgroundColor: '#646668',
        
        top: -70,
        justifyContent: 'center',
        alignItems: 'center',

    },
    btn2: {
        
        marginRight: '15%',
        marginLeft: '50%',
        backgroundColor: '#096A8C',
        
        top: -115,
        justifyContent: 'center',
        alignItems: 'center',
    },
    

  })    

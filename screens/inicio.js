import React, { Component } from 'react';
import * as Font from 'expo-font';
import { Image } from 'react-native';
import { StyleSheet, ImageBackground } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Title, Right } from 'native-base';
export default class Inicio extends Component {

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
            <Header noLeft style={styles.container}>
           
            <Button transparent onPress={() => this.props.navigation.push('Pedidos')}>
              <Icon name='list' />
            </Button>
           
          <Body>
            <Title style={styles.font}>Inicio</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.push('Actualizar')}>
              <Icon name='add' />
            </Button>
          </Right>
        </Header>
            <Content >
              
                <CardItem style={styles.nati}>
                  <Left>
                    <Thumbnail source={{ uri: 'Image URL' }} />
                    <Body>
                      <Text style={styles.titulos} >NativeBase</Text>
                      
                    </Body>
                  </Left>
                </CardItem>
                <CardItem style={styles.picture}>
                  <Body>
                    <Image source={{ uri: 'Image URL' }} style={{ height: 200, width: 200, flex: 1 }} />
                    <Text style={styles.titulos}>
                    
                    </Text>
                  </Body>
                </CardItem>
                <CardItem style={styles.detalle}>
                  <Left>
                    <Button transparent textStyle={{ color: '#87838B' }}>
                      <Icon name="logo-github" />
                      <Text>1,926 stars</Text>
                    </Button>
                  </Left>
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
      left: 60,
      fontFamily: 'sat-font',
      top : 6,
    },
   
   

    nati :  {
       flex : 1,
       position: 'relative',
       height: 100,
       top: 20,
       backgroundColor:'#D0D6D8',
        opacity: 0.8,
        borderRadius: 50,
    
      
    },

    picture : {
       flex : 1,
       position: 'relative',
        height: 300,
         marginTop: 4,
        top: 20,
        
     },

      detalle : {
        flex : 1,
         position: 'relative',
         height: 230,
         marginTop: 20,
         backgroundColor:'#D0D6D8',
        opacity: 0.8,
        borderRadius: 50,
    
        
     },
    
    titulos : {
      fontSize: 30,
      fontFamily: 'sat-font',
      color : '#0E43AD',

    }

  })    

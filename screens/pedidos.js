import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
export default class ListAvatarExample extends Component {
  render() {
    return (
      <Container>
        <ImageBackground source={require('../assets/picks/fondo3.jpg')} style={styles.img}>
        
        <Content>
          <List>
            <ListItem >
              
              <Body>
                <Text style={styles.font} >Kumar Pratik</Text>
                
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
       </ImageBackground> 

      </Container>
    );
  }
}

const styles = StyleSheet.create({
 

     img : {
      flex: 1,   
      backgroundColor:'#D0D6D8',
        opacity: 0.8,
      flexDirection: 'column',

    },
    font : {
      color : '#8018F5',
      fontSize: 30,
      left: 30,
      fontFamily: 'lob-font',
      top : 6,
    },

});
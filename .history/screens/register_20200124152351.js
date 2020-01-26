
import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Icon, Left, Body, Card, CardItem, Item, Input, Label, Text } from "native-base";

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Item fixedLabel>
                  <Label>Username</Label>
                  <Input />
                </Item>
                <Item fixedLabel last>
                  <Label>Password</Label>
                  <Input />
                </Item>
                <Button block success >
                  <Text>Registrarse</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

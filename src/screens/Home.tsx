import React from 'react'
import { View } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />

const HomeScreen = () => {

  return (
    <View style={{padding: 10}}>
      <Card style={{padding: 10}}>
        <Card.Title title="Doação"/>
        <Card.Content>
          <Paragraph>Necessário sangue tipo A+</Paragraph>
        </Card.Content>
        <Card.Actions style={{marginTop: 20}}>
          <Button>Compartilhar</Button>
          <Button>Agendar</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default HomeScreen;

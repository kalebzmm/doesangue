import React from 'react'
import { TouchableNativeFeedback, View } from 'react-native';
import { Button, Card, Paragraph } from 'react-native-paper';

const HomeScreen = () => {

  return (
    <View style={{padding: 10, marginTop: 30}}>
      <Card style={{padding: 10}}>
        <Card.Title title="Doação"/>
        <Card.Content>
          <Paragraph>Necessário sangue tipo A+</Paragraph>
        </Card.Content>
        <Card.Actions style={{marginTop: 20}}>
          <TouchableNativeFeedback>
            <Button mode='outlined' style={{marginRight: 10}}>Compartilhar</Button>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback>
            <Button mode='contained'>Agendar</Button>
          </TouchableNativeFeedback> 
        </Card.Actions>
      </Card>
    </View>
  );
};

export default HomeScreen;

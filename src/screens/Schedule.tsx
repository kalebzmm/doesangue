import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import { Button, Card, FAB, Paragraph } from 'react-native-paper';
import { getSchedules } from '../services/posts';
import 'moment/locale/pt-br'
moment.locale('pt-br');

interface ISchedule {
  id: string;
  date: string;
  id_user: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

const ScheduleScreen = ({navigation}: any) => {

  const [schedules, setSchedules] = useState<ISchedule[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const newSchedule = () => {
    navigation.navigate({
      name: 'NewSchedule',
    })
  }

  const loadSchedule = () => {
    AsyncStorage.getItem('@DoeSangue:token').then((token) => {
      if(token) {
        setRefreshing(true);
        getSchedules(token).then((data: any) => {
          setRefreshing(false);
          setSchedules(data);
        }).catch((err) => {
          setRefreshing(false);
        });
      }
    })
  }

  useEffect(() => {
    loadSchedule();
  }, [])

  return (
    <View style={{padding: 18, marginTop: 30, height: '100%'}}>
      <ScrollView
        contentContainerStyle={{height: '100%'}}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={loadSchedule}
          />
        }
      >
        {schedules.map((schedule) => {
          return (
            <Card key={schedule.id} style={{padding: 10, marginBottom: 15}}>
              <Card.Title title={moment(schedule.date).format('LLLL')} />
              <Card.Content>
                <Paragraph>HEMOSC Getúlio Vargas</Paragraph>
              </Card.Content>
              <Card.Actions style={{marginTop: 20}}>
                <TouchableNativeFeedback>
                  <Button mode='contained'>Cancelar</Button>
                </TouchableNativeFeedback> 
              </Card.Actions>
            </Card>
          )
        })}
        <FAB
          icon="plus"
          style={styles.fab}
          onPress={newSchedule}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 10,
    right: 0,
    bottom: 20,
  },
})

export default ScheduleScreen;

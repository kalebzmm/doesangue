import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect, useState } from 'react'
import { RefreshControl, ScrollView, TouchableNativeFeedback, View } from 'react-native';
import { Button, Card, Paragraph } from 'react-native-paper';
import { getPosts } from '../services/posts';

interface IPost {
  id: string;
  title: string;
  body: string;
  blood_type: string;
  id_user: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

const HomeScreen = ({navigation}: any) => {

  const [posts, setPosts] = useState<IPost[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const newSchedule = () => {
    navigation.navigate({
      name: 'NewSchedule',
    })
  }

  const loadPosts = () => {
    AsyncStorage.getItem('@DoeSangue:token').then((token) => {
      if(token) {
        setRefreshing(true);
        getPosts(token).then((data: any) => {
          setRefreshing(false);
          setPosts(data);
        }).catch((err) => {
          setRefreshing(false);
        });
      }
    })
  }

  useEffect(() => {
    loadPosts();
  }, [])

  return (
    <View style={{padding: 10, marginTop: 30, height: '100%'}}>
      <ScrollView
        contentContainerStyle={{height: '100%'}}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={loadPosts}
          />
        }
      >
        {posts.map((post) => {
          return (
            <Card key={post.id} style={{padding: 10}}>
              <Card.Title title={post.title} />
              <Card.Content>
                <Paragraph>{post.body}</Paragraph>
              </Card.Content>
              <Card.Actions style={{marginTop: 20}}>
                <TouchableNativeFeedback>
                  <Button onPress={newSchedule} mode='contained'>Agendar</Button>
                </TouchableNativeFeedback> 
              </Card.Actions>
            </Card>
          )
        })}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

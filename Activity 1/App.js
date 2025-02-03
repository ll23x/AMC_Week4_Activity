import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    id: 'To do List',
    title: 'To do List',
  },
  {
    id: 'Morning Routine: Wake Up 7:30Am or 8:30am',
    title: 'Morning Routine',
  },
  {
    id: 'Drink Water',
    title: 'Afternoon Routine',
  },
   {
    id: 'Eat breakfast',
    title: 'Afternoon Routine',
  },
   {
    id: 'Taking bath',
    title: 'Afternoon Routine',
  },
   {
    id: 'Mop the floor',
    title: 'Afternoon Routine',
  },
   {
    id: 'Doing all the dishes',
    title: 'Afternoon Routine',
  },
   {
    id: 'Buy some food at market',
    title: 'Afternoon Routine',
  },
   {
    id: 'Cook food at afternoon',
    title: 'Afternoon Routine',
  },
   {
    id: 'Afternoon Routine: Eat Lunch',
    title: 'Afternoon Routine',
  },
   {
    id: 'Checking SocMed',
    title: 'Afternoon Routine',
  },
   {
    id: 'Taking bath',
    title: 'Afternoon Routine',
  },
   {
    id: 'Watching Anime',
    title: 'Afternoon Routine',
  },
   {
    id: 'Playing w/ my friends horror game',
    title: 'Afternoon Routine',
  },
   {
    id: 'Cook rice while playing',
    title: 'Afternoon Routine',
  },
   {
    id: 'Helping my mother cook food for dinner',
    title: 'Afternoon Routine',
  },
   {
    id: 'Watching Tiktok',
    title: 'Afternoon Routine',
  },
   {
    id: 'Eat Dinner w/ my family',
    title: 'Afternoon Routine',
  },
   {
    id: 'Wash the dishes',
    title: 'Afternoon Routine',
  },
   {
    id: 'Fed our pet cat',
    title: 'Afternoon Routine',
  },
   {
    id: 'Clean our dining table',
    title: 'Afternoon Routine',
  },
   {
    id: 'Open our Aircon',
    title: 'Afternoon Routine',
  },
   {
    id: 'Playing games again',
    title: 'Afternoon Routine',
  },
   {
    id: 'Chatting my love',
    title: 'Afternoon Routine',
  },
   {
    id: 'Sleep',
    title: 'Afternoon Routine',
  },
];


type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const App = () => (
  <SafeAreaProvider >
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.id} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
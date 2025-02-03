import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    id: 'To do List',
    title: '1',
  },
  {
    id: 'Morning Routine: Wake Up 7:30Am or 8:30am',
    title: '2',
  },
  {
    id: 'Drink Water',
    title: '3',
  },
   {
    id: 'Eat breakfast',
    title: '4',
  },
   {
    id: 'Taking bath',
    title: '5',
  },
   {
    id: 'Mop the floor',
    title: '6',
  },
   {
    id: 'Doing all the dishes',
    title: '7',
  },
   {
    id: 'Buy some food at market',
    title: '8',
  },
   {
    id: 'Cook food at afternoon',
    title: '9',
  },
   {
    id: 'Afternoon Routine: Eat Lunch',
    title: '10',
  },
   {
    id: 'Checking SocMed',
    title: '11',
  },
   {
    id: 'Taking bath',
    title: '12',
  },
   {
    id: 'Watching Anime',
    title: '13',
  },
   {
    id: 'Playing w/ my friends horror game',
    title: '14',
  },
   {
    id: 'Cook rice while playing',
    title: '15',
  },
   {
    id: 'Helping my mother cook food for dinner',
    title: '16',
  },
   {
    id: 'Watching Tiktok',
    title: '17',
  },
   {
    id: 'Eat Dinner w/ my family',
    title: '18',
  },
   {
    id: 'Wash the dishes',
    title: '19',
  },
   {
    id: 'Fed our pet cat',
    title: '20',
  },
   {
    id: 'Clean our dining table',
    title: '21',
  },
   {
    id: 'Open our Aircon',
    title: '22',
  },
   {
    id: 'Playing games again',
    title: '23',
  },
   {
    id: 'Chatting my love',
    title: '24',
  },
   {
    id: 'Sleep',
    title: '25',
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
        renderItem={({item}) =><TouchableOpacity> <Item title={item.id} /> </TouchableOpacity>}
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
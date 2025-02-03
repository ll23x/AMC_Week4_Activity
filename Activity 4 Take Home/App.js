import React, { useState } from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Checkbox } from 'react-native-paper';

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

const COLORS = ['#ff6666', '#aad5ff', '#c0ffb7', '#ffc0cb', '#99ff66'];

const Item = ({ item, onToggle, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onToggle} style={[styles.item, { backgroundColor }]}>
    <Text style={[styles.title, { color: textColor }]}>{item.id}</Text>
    <Checkbox
      status={item.done ? 'checked' : 'unchecked'}
      onPress={onToggle}
      color={item.done ? "white" : "#6495ED"} // Dito kapag kin-click magiging white ang check and name
      uncheckedColor="#6495ED" // Yung Outline lang is color blue
    />
  </TouchableOpacity>
);

const App = () => {
  const [data, setData] = useState(DATA); // Kinuha yung laman nung data sa DATA variable

  const toggleDone = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  // So dito kapag nag check mag kakaroon ng number yung CHECK then yung Uncheck mababawasan
  const finishedCount = data.reduce((count, task) => (task.done ? count + 1 : count), 0);
  const notFinishedCount = data.length - finishedCount;

  const renderItem = ({ item, index }) => {
    const backgroundColor = item.done ? '#6495ED' : COLORS[index % COLORS.length];
    const textColor = item.done ? 'white' : 'black';

    return (
      <Item
        item={item}
        onToggle={() => toggleDone(item.id)}
        backgroundColor={backgroundColor}
        textColor={textColor}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Title */}
        <View style={styles.header}>
          <Text style={styles.headerText}> To do List</Text>
        </View>

        {/* Dito naman malalaman kung ilan na yung check and uncheck mo */}
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>✅ Check: {finishedCount}</Text>
          <Text style={styles.summaryText}>❎ Unchecked: {notFinishedCount}</Text>
        </View>

        {/* Nandito namn sa part na to yung listahan ng mga task */}
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={data}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'black', // Eto para mabago yung buong background colorq
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  header: {
    backgroundColor: 'purple', // Eto para mabago ang background color ng header
    padding: 15,
    alignItems: 'center', 
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 30,
    color: 'white',
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: 'lightblue', // Dito mababago mo  yung kulay ng check and uncheck container
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  summaryText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;

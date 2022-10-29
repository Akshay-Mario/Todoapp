import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import GestureRecognizer from "react-native-swipe-detect";
import GoalsInput from './Components/GoalInput';
import GoalItem from './Components/GoalItem';

export default function App() {

  const [goallist, setgoallist] = useState([]);
  const [visibleState, setVisible] = useState(false);


  // function setexpenseamount(y) {
  //   setexpense(y);
  // }

  // function goalentered(x) {
  //   setGoals(x);
  // }

  function setVisiblevalue() {
    setVisible(!visibleState);
  }

  function addgoal(goals, expense) {
    console.log(goals);
    setgoallist(currentcoursegoals => [...currentcoursegoals, { text: goals, expense: expense, id: Math.random().toString() }]);
    setVisible(!visibleState);
    console.log(goallist);
  }

  function onDeleteItem(id) {
    console.log('Deleted')
    setgoallist(currentcoursegoals => currentcoursegoals.filter((x) => x.id !== id))
  }

  return (
    <>
      <StatusBar style='dark'/>
      <View style={styles.container}>
        <Pressable style={styles.button} onPress={setVisiblevalue}>
          <Text style={styles.text}>iNPUT Expense</Text>
        </Pressable>
        {/* {visibleState && <GoalsInput onAddGoal={addgoal} visible = {visibleState} />} */}
        <GestureRecognizer style={{ flex: 1 }}
          onSwipeDown={setVisiblevalue}>
          <GoalsInput onAddGoal={addgoal} visible={visibleState} setvalue={setVisiblevalue} />
        </GestureRecognizer>

        <View style={styles.GoalsContainer}>
          {/* <ScrollView alwaysBounceVertical = {false}>
          {goallist.map((goal, i) => <View style={styles.goalitem} key={i}><Text style={styles.goaltext} >{goal}{i}</Text></View>)}
         </ScrollView> */}
          <FlatList data={goallist} renderItem={
            (itemData) => {
              return (
                <GoalItem text={itemData.item} ondelete={onDeleteItem} />
              )
            }
          } keyExtractor={(item, index) => {
            return item.id;
          }}
            alwaysBounceVertical={false} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 75,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
  },
  GoalsContainer: {
    flex: 15,
  },
  goalitem: {
    margin: 4,
    borderRadius: 5,
    padding: 15,
    backgroundColor: '#36C99A'
  },
  goaltext: {
    color: 'white'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

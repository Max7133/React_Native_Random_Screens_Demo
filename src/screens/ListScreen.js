import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 20 },
    { name: "Friend #2", age: 21 },
    { name: "Friend #3", age: 22 },
    { name: "Friend #4", age: 23 },
    { name: "Friend #5", age: 24 },
    { name: "Friend #6", age: 25 },
    { name: "Friend #7", age: 26 },
    { name: "Friend #8", age: 27 },
    { name: "Friend #9", age: 28 },
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name} // to create unique keys for friends
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
        // if console.log (item on the top)
        // item === { name: 'Friend #1' }
        // if console.log it (element intead of item)
        // element === { item: {name: 'Friend #1' }, index: 0 }
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    // for margin so I can scroll the list
    marginVertical: 50,
  },
});

export default ListScreen;

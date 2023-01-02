import React, { useState } from "react";
import { FlatList, SafeAreaView,Text,StyleSheet,TextInput } from "react-native";
import data from "./src/music-data.json"
import Card from "./src/components/Card"

const App = () => {

  const[text,setText] = useState();

  function onChangeText(text){
    setText(text)
    
  }

  return(
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Ara..."
        value={text}
        onChangeText={(text) => onChangeText(text)}
      ></TextInput>
      <FlatList
        data={data}
        renderItem={({item}) => <Card data={item}></Card>}>

      </FlatList>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'pink'
  },
  search: {
    margin: 10,
    backgroundColor: 'lightgray',
    height: 30,
    borderRadius: 5,
    paddingLeft: 5
  }
})
export default App
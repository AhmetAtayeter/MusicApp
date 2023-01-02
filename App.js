import React, { useState } from "react";
import { FlatList, SafeAreaView,Text,StyleSheet,TextInput, View } from "react-native";
import data from "./src/music-data.json"
import Card from "./src/components/Card"
import SearchBar from "./src/components/SearchBar/SearchBar";

const App = () => {

  const[list,setList] = useState(data);

  const renderSeperator = () => <View style={styles.seperator} />
  const handleSearch = text => {
    const filteredList = data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    })

    setList(filteredList);
  }

  return(
    <SafeAreaView style={styles.container}>
      <SearchBar  onSearch={handleSearch} />
      <FlatList
        data={list}
        renderItem={({item}) => <Card data={item}></Card>}
        ItemSeparatorComponent= {renderSeperator}>
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
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginHorizontal: 10
  }
})
export default App
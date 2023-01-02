import React from "react";
import { TextInput, View } from "react-native";
import style from "./SearchBar.style"

const SearchBar = props => {

    return(
        <View style={style.container}>
            <TextInput 
                placeholder="Ara..."
                onChangeText={props.onSearch}
            />
        </View>
    )
}

export default SearchBar
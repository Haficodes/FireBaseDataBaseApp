import React from "react";
import { ViewBase,Text, View, Button } from "react-native";

function Home({navigation}){
    return(
        <View>
            <Text>Home Screen</Text>
            <Button
            title="Add an Item"
            onpress={()=>navigation.navigate('Additem')}/>
            <Button
            title="List of Item"
            onpress={()=>navigation.navigate('List')} />
        </View>
    )
}


export default Home;
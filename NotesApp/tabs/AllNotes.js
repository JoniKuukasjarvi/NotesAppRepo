
import {useFocusEffect, useNavigation } from '@react-navigation/native';
import { Divider, Text, List, ListItem } from '@ui-kitten/components';
import { StyleSheet, View } from "react-native";
import React, {useState} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage"

       




export default function AllNotes() {
  const [notes, setNotes ] = useState([])
  const navigation = useNavigation()
  
  useFocusEffect(
      React.useCallback( () => {
        getNotes()
      }, [])
  )
      
  const getNotes = () => { 
      AsyncStorage.getItem("DATA").then((notes) => {
          setNotes(JSON.parse(notes))
      })
  }

  const renderItem = ({item}) => (
    <ListItem
      title={<Text category="h4"> {item}</Text>}
      onPress={ ()=> navigation.navigate("Note", {
        noteData: item
      })
    }
      
    />
  );


  return ( 

    <View style={{flex: 1}}>


    <List
      style={styles.container}
      data={notes}
      ItemSeparatorComponent={Divider}
      renderItem={renderItem}
    ></List>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    fontSize:20,
    backgroundColor: "lightblue",
    
  },
  item: {
    marginVertical: 4,
    marginBottom: 15,
  },
  notes: {
    fontSize:24,
    marginBottom: 15,
  }

});

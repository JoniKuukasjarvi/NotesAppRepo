
import {useFocusEffect, useNavigation } from '@react-navigation/native';
import { Text, Button } from '@ui-kitten/components';
import { StyleSheet, View } from "react-native";
import React, {useState} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage"

       


export default function Note({ route }) {
  const { noteData } = route.params
  const [notes, setNotes] = useState([])
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

  const deleteNote = async () => {
      const noteDelete = await notes.filter((note) => note !== noteData)
      await AsyncStorage.setItem("DATA", JSON.stringify(noteDelete))
      .then ( ()=> navigation.navigate("AllNotes"))
  }


	return (
		<View style={styles.container}>
			<Text style={styles.title} category="h1">
				Note
        
			</Text>
			<Text style={{ fontSize: 22, margin: 20, backgroundColor:"white"}}>
          {noteData}
        </Text>
			<View style={styles.bottom}>
				<Button onPress={deleteNote} style={styles.button}>
					Delete
				</Button>
			</View>
		</View>
  );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      fontSize:20,
      alignItems: "center",
      backgroundColor:"lightblue"

    },
    item: {
      marginVertical: 4
    },
    title: {
      textAlign: 'center',
      marginTop: 20
    },
    notes: {
      fontSize:24
    },
    button: {
      width: 200,
      textAlign: 'center',

    }
  });
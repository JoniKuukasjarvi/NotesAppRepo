
import { useNavigation } from '@react-navigation/native';
import { Button } from '@ui-kitten/components';
import { KeyboardAvoidingView, StyleSheet, View, Dimensions } from "react-native";
import React, {useState} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { TextInput } from "react-native";
       




export default function CreateNote() {
	const [ note, setNote ] = useState("")
	const navigation = useNavigation()

	const saveNote = async () => {
		const value = await AsyncStorage.getItem("DATA")
		const newNote = value ? JSON.parse(value) : []
		newNote.push(note)
		await AsyncStorage.setItem("DATA", JSON.stringify(newNote)).then(() => navigation.navigate("AllNotes"))
		setNote("")
	}

	return (
		<View style={styles.container}>
      
			<TextInput style={styles.textBox}
				value={note}
				onChangeText={setNote}
				multiline={true}
				autoFocus
				selectionColor="#fff"
			/>
			<KeyboardAvoidingView style={styles.bottom}>
				<Button style={styles.button} onPress={saveNote}>
					Create Note
				</Button>
			</KeyboardAvoidingView>
		</View>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',

    width: Dimensions.get('window').width
  },
  textBox: {
    backgroundColor: 'white',
    padding: 15,
    width: '80%',
    marginTop:20,
    borderRadius: 8,
    borderStyle: 'solid',
    borderColor: 'black',

  },
  bottom: {
      flex: 1,
      justifyContent: 'flex-end', 
      marginBottom: 30
  },
  button: {
      marginBottom: 30
  }
});

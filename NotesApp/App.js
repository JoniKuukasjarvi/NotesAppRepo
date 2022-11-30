import * as eva from "@eva-design/eva"
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ApplicationProvider, BottomNavigation, BottomNavigationTab, Button, } from '@ui-kitten/components';
import Note from "./tabs/Note";
import CreateNote from "./tabs/CreateNote";
import AllNotes from "./tabs/AllNotes";
import { View, StyleSheet } from "react-native";

       //Figure out how to make darkmode toggle
       const { Navigator, Screen } = createBottomTabNavigator();


       
       const BottomTabBar = ({ navigation, state }) => (
         <BottomNavigation
           selectedIndex={state.index}
           onSelect={index => navigation.navigate(state.routeNames[index])}>
           <BottomNavigationTab title='All Notes'/>
           <BottomNavigationTab title='New Note'/>
           
         </BottomNavigation>
       );
       
       const TabNavigator = ({}) => (
         <Navigator tabBar={props => <BottomTabBar {...props}  />}  style={styles.tabNavigator}>
           <Screen name='AllNotes' component={AllNotes}>
           
           </Screen>
           <Screen name='New Note' component={CreateNote} />
           <Screen name='Note' component={Note} />
           
         </Navigator>
       );

export default function App() {
  
  

  return ( 
  
          <ApplicationProvider {...eva} theme={eva.light}>

          <NavigationContainer >
          
              <TabNavigator>
                
              </TabNavigator>
          </NavigationContainer>
          </ApplicationProvider>

  );

}

const styles = StyleSheet.create({
  
  tabNavigator:{
     backgroundColor:'blue',
     fontSize:22
  }




})

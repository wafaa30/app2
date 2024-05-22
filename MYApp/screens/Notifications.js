import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View, Image, Switch } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Notifications() {

  return (
 <View style={styles.container} >
      <View style={styles.Head}>
      <Ionicons name="notifications" size={30} color="black" />
        <Text style={[styles.text, {fontSize:25}]}>
      NOTIFICATIONS
         </Text>
      </View>

      <View style={styles.switch}>
      <Text style={[styles.notif, {fontSize:18}]}>
        Une nouvelle actualité
      </Text>
      <Switch />
      </View>

      <View style={styles.switch}>
      <Text style={[styles.notif, {fontSize:18}]}>
        Rappelle de seance de cotation
      </Text>
      <Switch />
      </View>


      <View style={styles.switch}>
      <Text style={[styles.notif, {fontSize:18}]}>
       Un nouveau resultat
      </Text>
      <Switch />
      </View>

      <View style={styles.switch}>
      <Text style={[styles.notif, {fontSize:18}]}>
      Les assemblées générales des actionnaires
      </Text>
      <Switch />
      </View>


      <View style={styles.switch}>
      <Text style={[styles.notif, {fontSize:18}]}>
        Evenements économiques
      </Text>
      <Switch />
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container:{
  flex:1,
  backgroundColor:'white',
  },
 Head: {
  
  padding:90,
    backgroundColor: 'cadetblue',
    alignItems: 'center',
    fontWeight:'bold',
    justifyContent: 'center',

  },
  text: {
  fontSize:16,
 
  },
  notif:{
  backgroundColor:'white',
  width:'80%',
  paddingTop:10,
  paddingLeft:8,
  
  },
  switch:{
  flexDirection:'row',
  alignContent:'center',
  justifyContent:'space-between',
  paddingHorizontal:10,
  padding:15,
  borderBottomWidth:4,
  borderBottomColor:'#d3d3d3',
  },
});
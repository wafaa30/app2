import React from "react";
import { StyleSheet, SafeAreaView, Text,View } from "react-native";


export default function Notif() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={[styles.head, { backgroundColor: 'cadetblue' }]}>
     
     <Text style={{fontSize:25, fontWeight:'bold', marginLeft:6}}>
    Notifications
     </Text>
     </View>
        </SafeAreaView>
    
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-start",
      backgroundColor: "white",
    },
    head:{
        paddingTop:40,
        paddingBottom:10,
        paddingLeft:5,
        flexDirection:'row'},
    Text: {
      color: "black",
      fontSize: 15,
      
    },
  });
  
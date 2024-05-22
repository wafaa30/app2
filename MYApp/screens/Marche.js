import React from 'react';
import {SafeAreaView, View, Text, StyleSheet } from 'react-native';
export default function Marche ({ }) {
    
  return (
    <SafeAreaView style={styles.container}>
           
    <View style={[styles.head, { backgroundColor: 'cadetblue' }]}>
     
     <Text style={{fontSize:25, fontWeight:'bold', marginLeft:6}}>
     Marché
     </Text>
     </View>
         <Text style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 20,
          marginLeft:15,
          marginTop:10,
          marginBottom: 10,

        }}>Actions</Text>
      <View style={styles.row}>
        <View style={styles.rowone}>
          <Text style={styles.cellText }>Titre</Text>
        </View>
        <View style={styles.rowone}>
          <Text style={styles.cellText}>Valeur</Text>
        </View>
        <View style={styles.rowone}>
          <Text style={styles.cellText}>Variation</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text style={styles.cellText}></Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.cellText}></Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.cellText}></Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text style={styles.cellText}></Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.cellText}></Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.cellText}></Text>
        </View>
        
      </View>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text style={styles.cellText}></Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.cellText}></Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.cellText}></Text>
        </View>
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    
    borderColor: '#000',
    flexDirection: 'colmn',
   
  },
  head:{
    paddingTop:40,
    paddingBottom:10,
    paddingLeft:5,
    flexDirection:'row'},
  row: {
    flexDirection: 'row',
    marginBottom:10,
 
  },
  cell: {
    borderWidth: 1,
    borderColor: '#000',
    flex: 1,
    padding: 5,
    borderRadius: 20,
    

  },
  rowone: {
    borderWidth: 1,
    borderColor: '#000',
    flex: 1,
    padding: 5,
    borderRadius: 20,
    backgroundColor: 'cadetblue' },
  cellText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

    

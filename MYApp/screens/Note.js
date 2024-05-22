import React from "react";
import { StyleSheet, SafeAreaView, Text,View ,Pressable,TextInput} from "react-native";


export default function Note() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={[styles.head, { backgroundColor: 'cadetblue' }]}>
     
     <Text style={{fontSize:25, fontWeight:'bold', marginLeft:6}}>
     Laisser un commentaire
     </Text>
     </View>
        
     <Text style={{fontSize:17, fontWeight:'bold', marginLeft:9, marginTop:10,}}>
    Remplir vos Informations :
     </Text>
   
    <TextInput
    placeholder="Nom "
    multiline
    numberOfLines={4}
    maxLength={40}
    onChangeText={(text) => console.log(text)} 
    style={styles.txtinput}
  />
   <TextInput
    placeholder="Prénom "
    multiline
    numberOfLines={4}
    maxLength={40}
    onChangeText={(text) => console.log(text)} 
    style={styles.txtinput}
  />
   <TextInput
    placeholder="Nom d'utilisateur"
    multiline
    numberOfLines={4}
    maxLength={40}
    onChangeText={(text) => console.log(text)} 
    style={styles.txtinput}
  />
   <TextInput
    placeholder="Adresse e-mail "
    multiline
    numberOfLines={4}
    maxLength={40}
    onChangeText={(text) => console.log(text)} 
    style={styles.txtinput}
  />
   <Text style={{fontSize:17, fontWeight:'bold', marginLeft:9, marginTop:10,}}>
     Votre commentaire :
     </Text>
     <TextInput
    placeholder="Message "
    multiline={true}
    numberOfLines={4}
    maxLength={40}
    
    onChangeText={(text) => console.log(text)} 
    style={{
       zIndex:1,
        marginLeft: 10,
        marginRight: 10,  
        height:200,
        borderColor:'black',
        borderWidth: 1.5, 
        marginTop:20,
        borderRadius: 20,
        paddingHorizontal: 15, }}
  />
   <Pressable
       
       style={({ pressed }) => [
         styles.button,
         pressed && styles.buttonPressed,
       ]}
     >
       {({ pressed }) => (
         <Text style={[styles.text, pressed && styles.textPressed]}>
          Envoyer
         </Text>
       )}
     </Pressable>
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
    txtinput:{
        marginLeft: 10,
        marginRight: 10,  
       borderColor:'black',
        borderWidth: 1.5, 
        marginTop:20,
        borderRadius: 20,
        paddingHorizontal: 15, 
      },
      button: {
        backgroundColor: 'teal',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginLeft: 200,
        marginRight: 30,
        marginTop:15,
        alignItems: 'center',
      },
      buttonPressed: {
        backgroundColor: 'lightcyan',
      },
      text: {
        color: 'white',
        fontSize: 16,
      },
      textPressed: {
        color: 'teal',
      },
    
  });
  
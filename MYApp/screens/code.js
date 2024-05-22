import React from "react";
import { TextInput,Pressable,StyleSheet,Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Code({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 25,
          marginLeft:15,
          marginTop:30,
          marginBottom: 10,

        }}>confirmez votre compte </Text>
        <Text style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 16,
          marginLeft:15,
          marginBottom: 25,

        }}>Nous vous avons envoyé un code par e-mail . Entrez ce code pour confirmer votre compte.</Text>
       <TextInput
        placeholder="Entrez le code"
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={(text) => console.log(text)} 
        style={styles.txtinput}
        />
   
        <Pressable
       
       style={({ pressed }) => [
         styles.button,
         pressed && styles.buttonPressed,
        ]}
        onPress={() => navigation.navigate("newpass")}
       >
       {({ pressed }) => (
        <Text style={[styles.text, pressed && styles.textPressed]}  >
        continuer
        </Text>
       )}
       </Pressable>
    </SafeAreaView>)}
    const styles = StyleSheet.create({
        container:{
            flex: 1,
            justifyContent: 'flex-start',
            backgroundColor: 'white', 
          },
          txtinput:{
            marginLeft: 10,
            marginRight: 10,  
            backgroundColor: 'gainsboro',
            marginBottom: 15,
            borderRadius: 20,
            paddingHorizontal: 15,
          },
        button: {
          backgroundColor: 'cadetblue',
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 50,
          marginLeft: 200,
          marginRight: 30,
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
      
  
})

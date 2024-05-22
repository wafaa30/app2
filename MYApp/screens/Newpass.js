import React from "react";
import { TextInput,Pressable,StyleSheet,Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Newpass(){
    return (
        <SafeAreaView style={styles.container}>
            
            <Text style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 20,
              marginLeft:15,
              marginTop:30,
              marginBottom: 30,
    
            }}>Entrez votre nouveau mot de passe</Text>
            
           <TextInput
            placeholder="Nouveau mot de passe"
            multiline
            numberOfLines={4}
            maxLength={40}
            onChangeText={(text) => console.log(text)} 
            style={styles.txtinput}
            />
              
           <TextInput
            placeholder=" Confirmer le nouveau mot de passe"
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
           >
           {({ pressed }) => (
            <Text style={[styles.text, pressed && styles.textPressed]}
            >
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
                backgroundColor: '#dcdcdc',
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
    
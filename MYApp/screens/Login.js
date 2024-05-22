import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, TextInput, Pressable, Text, StyleSheet, Image } from "react-native";
import { Icon } from 'react-native-elements';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        style={{ 
          width: 300,
          height: 200,
          marginLeft: 50,
          marginRight: 60,  
          
         
        }}
      />
      <Text 
        style={{
          color: 'black',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 32,
        }}  
      >
        بورصة الجزائر
      </Text>
      <Text 
        style={{
          color: 'black',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 13.5,
          marginBottom: 125,
        }}  
      >
        ALGIERS STOCK EXCHANGE
      </Text>

      <View style={styles.inputContainer}>
        <Icon
          name='person'
          size={24}
          color='black'
          style={styles.icon}
        />
        <TextInput
          placeholder="Nom d'utilisateur"
          style={styles.txtinput}
          onChangeText={(text) => console.log(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons
          name='lock-closed'
          size={24}
          color='black'
          style={styles.icon}
        />
        <TextInput
          placeholder="Mot de passe"
          secureTextEntry={true}
          style={styles.txtinput}
          onChangeText={(text) => console.log(text)}
        />
      </View>
      <Text 
        style={{
          color: 'black',
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: 30,
          marginTop: 15,
        }}  
        onPress={() => navigation.navigate("oubmdps")}
      >
        Mot de passe oublié ?
      </Text>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={() => navigation.navigate("Home")}
      >
        {({ pressed }) => (
          <Text style={[styles.text, pressed && styles.textPressed]} >
            Se connecter
          </Text>
        )}
      </Pressable>

      <Text style={styles.baseText}>
        Vous n’avez pas de compte ?
        <Text style={styles.innerText} onPress={() => navigation.navigate("singup")}> Inscrivez-vous</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'white', 
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,  
    marginBottom: 10,
    borderRadius: 20,
    paddingHorizontal: 15, 
    backgroundColor: 'gainsboro',
  },
  icon: {
    marginRight: 10,
     backgroundColor: 'gainsboro',
  },
    
  txtinput: {
    flex: 1,
        height: 60,
        marginTop: 8,
        marginRight: 10,  
       height:55,
        marginBottom: 8,
        borderRadius: 20,
        paddingHorizontal: 15, 
        backgroundColor: 'gainsboro',
        borderColor: 'black',
       
  },
  button: {
    backgroundColor: 'cadetblue',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 65,
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
  baseText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  innerText: {
    color: 'red',
    marginBottom: 20,
  },
});

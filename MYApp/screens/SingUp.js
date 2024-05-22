import { View,TextInput,StyleSheet,Pressable,Text } from "react-native";
import React,{Component} from "react";

export default class SingUp extends Component{

  constructor(props) {
    super(props);
    this.state = {first_name: '', last_name: '', userName: '', email: '', password: ''};
  }
  
  Register = () => {
    var first_name = this.state.first_name;
    var last_name = this.state.last_name;
    var userName = this.state.userName;
    var email = this.state.email;
    var password = this.state.password;


    if (first_name.length === 0 || last_name.length ===0 || userName.length === 0 || email.length ===0 || password.length === 0) {
      alert("Required Field is Missing");

    } else {
      var InsertAPIURL = "http://192.168.43.157:8081/reactnative/myapi/myapi.php";


      let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };

      var Data = {
        first_name: first_name,
        last_name: last_name,
        userName: userName,
        email: email,
        password: password
      };

      fetch(InsertAPIURL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data)
      })
      .then((response) =>response.json())
      .then((response)=>{
        alert(response[0].Message);
      })
      .catch((error) => {
        alert("Error"+error);
      })
    }
  }

  render() {
    return(
<View style={styles.container}>
      <TextInput
        placeholder="Nom "
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={first_name => this.setState({first_name})}
        style={styles.txtinput}
      />
       <TextInput
        placeholder="Prénom "
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={last_name => this.setState({last_name})}
        style={styles.txtinput}
      />
         <TextInput
        placeholder="Nom d'utilisateur "
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={userName => this.setState({userName})}
        style={styles.txtinput}
      />
       <TextInput
        placeholder="Adresse e-mail "
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={email => this.setState({email})}
        style={styles.txtinput}
      />
      <TextInput
        placeholder="Mot de passe"
        numberOfLines={4}
        maxLength={40}
        secureTextEntry={true}
        style={styles.txtinput}
        onChangeText={password => this.setState({password})}
       />
      
   
      <Pressable
       onPress={this.Register}
       style={({ pressed }) => [
         styles.button,
         pressed && styles.buttonPressed,
       ]}
     >
       {({ pressed }) => (
         <Text style={[styles.text, pressed && styles.textPressed]}>
          s'inscrire
         </Text>
       )}
       
     </Pressable>
    </View>

)
} 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
   
  },
  inputContainer: {
    marginBottom: 10,
  },
  txtinput: {
    marginLeft: 10,
    marginRight: 10, 
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: 'gainsboro',
    borderColor: 'black',
    marginBottom: 10,
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
});

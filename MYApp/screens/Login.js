import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  Image,
  Pressable
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userPassword: '',
    };
  }

  login = () => {
    const { userEmail, userPassword } = this.state;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (userEmail == '') {
      this.setState({ email: 'Please enter Email address' });
    } else if (reg.test(userEmail) === false) {
      this.setState({ email: 'Email is Not Correct' });
      return false;
    } else if (userPassword == '') {
      this.setState({ email: 'Please enter password' });
    } else {
      fetch('http://192.168.1.38/reactnative/MYApp/server-php-api/login.php', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          email: userEmail,
          password: userPassword,
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson == 'ok') {
            alert('Successfully Login');
            this.props.navigation.navigate('Home');
          } else {
            alert('Wrong Login Details');
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }

    Keyboard.dismiss();
  };

  render() {
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
            onChangeText={(userEmail) => this.setState({ userEmail })}
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
            onChangeText={(userPassword) => this.setState({ userPassword })}
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
          onPress={() => this.props.navigation.navigate("oubmdps")}
        >
          Mot de passe oublié ?
        </Text>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={this.login}
        >
          {({ pressed }) => (
            <Text style={[styles.text, pressed && styles.textPressed]} >
              Se connecter
            </Text>
          )}
        </Pressable>

        <Text style={styles.baseText}>
          Vous n’avez pas de compte ?
          <Text style={styles.innerText} onPress={() => this.props.navigation.navigate("singup")}> Inscrivez-vous</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
    height: 55,
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

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class SingUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      userEmail: '',
      userPassword: '',
      confirmPassword: '',
      loading: false,
      message: '',
    };
  }

  userRegister = () => {
    const { firstName, lastName, username, userEmail, userPassword ,confirmPassword } = this.state;

    if (userPassword !== confirmPassword) {
      alert(' Les mots de passe ne correspondent pas');
      return;
    }

    if (!firstName || !lastName || !username || !userEmail || !userPassword || !confirmPassword) {
      alert('Veuillez remplir tous les champs');
      return;}

    this.setState({ loading: true, message: '' });

    // Log the data being sent for debugging purposes
    console.log('Sending data:', {
      firstName,
      lastName,
      username,
      email: userEmail,
      password: userPassword,
    });
    
    fetch('http://192.168.1.38/reactnative/MYApp/server-php-api/register.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: userEmail,
        password: userPassword,
      }),
    })
    .then(response => {
      if (response.headers.get('content-type')?.includes('application/json')) {
        return response.json();
      } else {
        return response.text(); // Return plain text response
      }
    })
    .then(data => {
      console.log('Response data:', data);
      this.setState({ message: data || 'Registration successful', loading: false });
    })
    .catch(error => {
      console.error('Error:', error);
      this.setState({ message: `Error: ${error.message}`, loading: false });
    });
  };

  render() {
    const { firstName, lastName, username, userEmail, userPassword, confirmPassword ,loading, message } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Enter First Name"
          style={styles.txtinput}
          underlineColorAndroid="transparent"
          onChangeText={firstName => this.setState({ firstName })}
        />

        <TextInput
          placeholder="Enter Last Name"
          style={styles.txtinput}
          underlineColorAndroid="transparent"
          onChangeText={lastName => this.setState({ lastName })}
        />

        <TextInput
          placeholder="Enter Username"
          style={styles.txtinput}
          underlineColorAndroid="transparent"
          onChangeText={username => this.setState({ username })}
        />

        <TextInput
          placeholder="Enter Email"
          style={styles.txtinput}
          underlineColorAndroid="transparent"
          onChangeText={userEmail => this.setState({ userEmail })}
        />

        <TextInput
          placeholder="Enter Password"
          style={styles.txtinput}
          underlineColorAndroid="transparent"
          secureTextEntry={true}
          onChangeText={userPassword => this.setState({ userPassword })}
        />

        <TextInput
          placeholder="Confirm Password"
          style={styles.txtinput}
          underlineColorAndroid="transparent"
          secureTextEntry={true}
          onChangeText={confirmPassword => this.setState({ confirmPassword })}
        />

        <TouchableOpacity
          onPress={this.userRegister}
          style={styles.button}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? 'Signing up...' : 'Signup'}
          </Text>
        </TouchableOpacity>

        {message ? <Text style={styles.message}>{message}</Text> : null}
      </View>
    );
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
    height:80,
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
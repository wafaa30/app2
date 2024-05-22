import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
import { Icon } from 'react-native-elements';
import Login from './screens/Login';
import SingUp from './screens/SingUp';
import OubMdps from './screens/OubMdps';
import Marche from './screens/Marche';
import Code from './screens/code';
import Newpass from './screens/Newpass';
import Propos from './screens/Propos';
import Achats from './screens/Achats';
import Notifications from './screens/Notifications';
import Home from './screens/Home';
import Parametre from './screens/Parametre';
import Notif from './screens/Notif';
import Note from './screens/Note';
import Info from './screens/Info';
import Lang from './screens/Lang';



const Stack = createNativeStackNavigator();
const BottomTab = createMaterialBottomTabNavigator();

function MainTabScreen() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      shifting={true} // Enable shifting behavior
      barStyle={{ backgroundColor: 'cadetblue' }} // Background color of the tab bar
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={26} />
          ),
        }}
      />
     
      <BottomTab.Screen
        name="Marché"
        component={Marche}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="storefront" color={color} size={26} />
            ),
           
        }}
      />
       <BottomTab.Screen
        name="Achat et vente"
        component={Achats}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart" color={color} size={26} />
          ),
        }}
      />
       <BottomTab.Screen
        name="Notifications"
        component={Notif}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Paramètres"
        component={Parametre}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" color={color} size={26} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function App() {
  
  return (
   
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="singup" component={SingUp} />
        <Stack.Screen name="oubmdps" component={OubMdps} />
        <Stack.Screen name="newpass" component={Newpass} />
        <Stack.Screen name="marche" component={Marche} />
        <Stack.Screen name="code" component={Code} />
        <Stack.Screen name="propos" component={Propos} />
        <Stack.Screen name="achats" component={Achats} />
        <Stack.Screen name="notifications" component={Notifications} />
        <Stack.Screen name="notifs" component={Notif} />
        <Stack.Screen name="note" component={Note} />
        <Stack.Screen name="info" component={Info} />
        <Stack.Screen name="lang" component={Lang} />
        <Stack.Screen name="Home" component={MainTabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

export default App;

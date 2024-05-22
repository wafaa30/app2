import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Switch,
  Image,
} from 'react-native';
import FontAwsome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
export default function Parametre({navigation}) {
  const [form, setForm] = useState({
    darkMode: false,
    pushNotifications: false,
  });

  return (
    <SafeAreaView>
       <ScrollView contentContainerStyle={styles.scrollViewContent}>
       <View style={[styles.head, { backgroundColor: 'cadetblue' }]}>
     
     <Text style={{fontSize:25, fontWeight:'bold', marginLeft:6}}>Paramètres
     
     </Text>
     </View>
      <View style={styles.profile}>
        <TouchableOpacity onPress={() => {}}>
        </TouchableOpacity>
        <View style={styles.profileAvatarWrapper} >
          <Image alt='profile pic' source={require("../assets/profile.jpg")} style={styles.profileAvatar}/>
        </View>
        <View>
          <Text style={styles.profileName}>User name</Text>
        </View>    

        <View style={styles.total}>
          <FontAwsome name='dollar' size={20} color="white"  style={[styles.rowIcon, { backgroundColor: 'forestgreen' }]}/>
          <Text style={{fontSize:20, fontWeight:"bold",}}>Le totale :</Text>
        </View>
        <View style={styles.price} >
          <Text style={{fontSize:20, fontWeight:"bold",}}>9999999</Text>
          <Text style={{fontSize:20, fontWeight:"bold",}}>DA</Text>
        </View>
       
        <Text style={styles.sectionTitle}>Preferences</Text>
        <TouchableOpacity onPress={() => {}} style={styles.row}>
          <View style={[styles.rowIcon, { backgroundColor: '#008000' }]}>
            <Feather name='trending-up' size={20} color="white"/>
          </View>
          <View>
            <Text style={styles.rowLabel}> les titres</Text>
          </View>
          <View style={styles.rowSpacer} />
          <Feather name='chevron-right' size={20}/>
        </TouchableOpacity><TouchableOpacity onPress={() => navigation.navigate("lang")} style={styles.row}>
          <View style={[styles.rowIcon, { backgroundColor: '#fe9400' }]}> 
            <Feather name='globe' size={20} color="white" />
          </View>
          <Text style={styles.rowLabel} >Languages</Text>
          <View style={styles.rowSpacer} />
          <Feather name='chevron-right' size={20}/>
        </TouchableOpacity>
        <View style={styles.row}>
          <View style={[styles.rowIcon, { backgroundColor: '#007afe' }]}>
            <Feather name='moon' size={20} color="white" />
          </View>
          <Text style={styles.rowLabel}> mode sombre </Text>
          <View style={styles.rowSpacer} />
          <Switch
            onValueChange={darkMode => setForm({ ...form, darkMode })}
            value={form.darkMode} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("notifications")} style={styles.row}>
          <View style={[styles.rowIcon, { backgroundColor: '#38C959' }]}>
            <Feather name='bell' size={20} color="white"/>
          </View>
          <Text style={styles.rowLabel}>Notifications</Text>
          <View style={styles.rowSpacer} />
          <Feather name='chevron-right' size={20}/>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}> Ressources</Text>
        <TouchableOpacity onPress={() => navigation.navigate("propos")} style={styles.row}>
          <View style={[styles.rowIcon, { backgroundColor: '#8e8d91' }]}>
            <Feather name='info' size={20} color="white"/>
          </View>
          <Text style={styles.rowLabel} >A propos</Text>
          <View style={styles.rowSpacer}/>
          <Feather name='chevron-right' size={20}/>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
   
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    backgroundColor: 'white',
  },
  head:{
    paddingTop:40,
    paddingBottom:10,
    paddingLeft:5,
    flexDirection:'row'},
  profile: {
    paddingTop: 40,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  profileAvatarWrapper: {
    position: 'relative',
    alignItems: 'center',
  },
  profileAvatar: {
    width: 72,
    height: 72,
    borderRadius: 9999,
  },
  profileName: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: '600',
    color: '#414d63',
    textAlign: 'center',
    paddingBottom:20,
  },
  total:{
    flexDirection: 'row',
    height: 40,
    backgroundColor:'#f2f2f2',
    borderRadius: 8,
  },
  price:{
    flexDirection: 'row',
    height: 60,
    backgroundColor:'#f2f2f2',
    justifyContent: 'space-between', 
    paddingHorizontal: 80, 
    borderRadius: 8,
  },
  sectionTitle: {
    paddingVertical: 12,
    fontSize: 12,
    fontWeight: '600',
    color: '#9e9e9e',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    marginBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
    marginTop:10,
  },
  rowIcon: {
    width: 32,
    height: 32,
    marginRight: 12,
    borderRadius: 9999,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '400',
    color: '#0c0c0c',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },

scrollViewContent: {

  backgroundColor: 'white',
},
});
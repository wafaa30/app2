import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

export default function Propos({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
       <Text style={{fontWeight:'bold',fontSize:30}}>A propos</Text>
      </View>

      <View>
        <ScrollView>
        <View style={styles.section}>
            <Feather name="info" size={25} color="black" />
          <Text style={[{fontSize:20, flexDirection:'row',paddingLeft:15}]} onPress={() => navigation.navigate("info")}>
            Informations nécéssaire
          </Text>
         
        </View>

        
        <View  style={styles.section} >
         <FontAwesome name="legal" size={25} color="black" />
          <Text style={{fontSize:20,paddingLeft:15}}>
           Légales
          </Text>
          </View>

          <View  style={styles.section}>
          <AntDesignIcon name="questioncircleo" size={25} color="black" />
          <Text style={{fontSize:20,paddingLeft:15}}>
           Aide à l'application
          </Text>
          
        </View>
        

        <View style={styles.section}>
        <FontAwesome name="comment" size={25} color="black" />
          <Text  style={{fontSize:20, paddingLeft:15}} onPress={() => navigation.navigate("note")}>
            Laisser un commentaire
          </Text>
         
        </View>

        <View style={styles.section}>
        <Feather name="share-2" size={25} color="black"  />
          <Text  style={{fontSize:20,paddingLeft:15}}>
            Partage et reseaux sociaux
          </Text>
          
        </View>
        </ScrollView>
      </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
  flex:1,
  },
  head: {
    padding:90,
    backgroundColor: 'cadetblue',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
 
  section:{
  backgroundColor:'white',
  paddingTop:20,
  paddingLeft:10,
  textAlign:'left',
  fontSize:16,
  borderBottomWidth:2,
  borderBottomColor:'#d3d3d3',
  paddingBottom:25,
  flexDirection: 'row',
  height:125,
  },
});
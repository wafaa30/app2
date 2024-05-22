import { StyleSheet, Text, View, Image, Switch } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function Achats() {

  return (
   <View style={styles.Container}>
       <View style={[styles.head, { backgroundColor: 'cadetblue' }]}>

<Text style={{fontSize:25, fontWeight:'bold', marginLeft:2}}>
Achat et vente
</Text>
<View style={styles.rightIcon}>
<Feather name="plus" size={35} />
</View>
     </View>
    
     <View style={styles.Items}>
       <View style={styles.users}>
        <View>
         <Text  style={styles.text1}> user name </Text>
        </View>
        <View>
        <Text>le titre</Text>
        <Text> le prix </Text>
        <Text> le pourcentage </Text>
        </View>
       </View>

       <View style={styles.users}>
       <View>
        <Text  style={styles.text1} > user name </Text>
        </View>
        <View>
        <Text>le titre</Text>
        <Text> le prix </Text>
        <Text> le pourcentage </Text>
        </View>
      
     </View>
   </View>
  </View> 
  );
}

const styles = StyleSheet.create({
  Container:{
    flex:1,
   
  },

  head:{
    paddingTop:40,
    paddingBottom:10,
    paddingLeft:5,
    flexDirection:'row'},
 rightIcon:{
 flex:1,
 alignItems:'flex-end'

 },
 Items:{
 flex:2,
 paddingTop:10,
 },
users:{
flexDirection:'column',
paddingBottom:20,
marginLeft:10,
},
text1:{
 fontWeight:"bold",
 fontSize:17,
},
});
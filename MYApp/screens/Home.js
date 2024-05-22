import React from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import ReadMoreText from "react-native-read-more-text";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
        
    <View style={[styles.head, { backgroundColor: 'cadetblue' }]}>
     
     <Text style={{fontSize:25, fontWeight:'bold', marginLeft:6}}>
     Actualité
     </Text>
     </View>
      <ReadMoreText
        numberOfLines={3}
        readMoreText={"read more"}
        readLessText={"read less"}
        readMoreStyle={{ color: "#CACACA" }}
        readLessStyle={{ color: "#000" }}
        style={styles.readMoreText}
      >
        <Text style={styles.Text}>
       
      
        gggghhhjfdsawertyuiol,mnbvcxzff gggghhhjfdsawertyuiol,mnbvcxzff gggghhhjfdsawertyuiol,mnbvcxzff
        gggghhhjfdsawertyuiol,mnbvcxzff gggghhhjfdsawertyuiol,mnbvcxzff gggghhhjfdsawertyuiol,mnbvcxzff
        gggghhhjfdsawertyuiol,mnbvcxzff gggghhhjfdsawertyuiol,mnbvcxzff gggghhhjfdsawertyuiol,mnbvcxzff
        </Text>
      </ReadMoreText>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  Text: {
    color: "black",
    fontSize: 15,
    
  },
  head:{
    paddingTop:40,
    paddingBottom:10,
    paddingLeft:5,
    flexDirection:'row'}
});

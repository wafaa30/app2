import React from 'react';
import { View, Text, Linking, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';

export default function Info() {
  const openMaps = () => {
    const address = 'Q3C4+2VF, Bd Colonel Amirouche, Ndjamena 16000, Algeria';
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    Linking.openURL(url);
  };
  const openSite = () => {
    const facebookProfileUrl = 'http://www.sgbv.dz/';
    Linking.openURL(facebookProfileUrl);
  };

  const openFacebook = () => {
    const facebookProfileUrl = 'https://www.facebook.com/profile.php?id=100078020104732';
    Linking.openURL(facebookProfileUrl);
  };
  const openYoutube = () => {
    const facebookProfileUrl = 'https://www.youtube.com/@amoula3071/featured#';
    Linking.openURL(facebookProfileUrl);
  };
  const openFLinkdin = () => {
    const facebookProfileUrl = 'https://www.linkedin.com/company/la-bourse-d%27alger-sgbv-algiers-stock-exchange/';
    Linking.openURL(facebookProfileUrl);
  };
  const opentwitter = () => {
    const facebookProfileUrl = 'https://twitter.com/Bourse_Alger';
    Linking.openURL(facebookProfileUrl);
  };
  const mapRegion = {
    latitude: 36.77027732877163,
    longitude:  3.057348427357366,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  };

  const markerCoordinate = {
    latitude: 36.77027732877163,
    longitude: 3.057348427357366,
  };

  return (
    <View style={styles.container}>
      <View style={[styles.head, { backgroundColor: 'cadetblue' }]}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 6 }}>
          Informations nécessaires
        </Text>
      </View>
     
      <MapView style={styles.map} region={mapRegion}>
        <Marker coordinate={markerCoordinate} title="Bourse d'Alger" />
      </MapView>
      <TouchableOpacity style={styles.linkContainer} onPress={openMaps}>
      <Ionicons name="location" size={24}  />
        
        <Text style={styles.link}>Q3C4+2VF, Bd Colonel Amirouche, Ndjamena 16000</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkContainer} onPress={openSite}>
        <FontAwesome name="link" size={24} color="black" />
        <Text style={styles.link}>http://www.sgbv.dz/</Text>
      </TouchableOpacity>
      <View style={styles.contactContainer}>
        <FontAwesome name="phone" size={24} color="#32cd32" />
        <Text style={styles.contactText}>Contact:</Text>
        <Text style={styles.contact}>Tél : 023 49 22 23/24/25
          {'\n'} Fax : 023 49 22 16</Text>
      </View>

      <TouchableOpacity style={styles.facebookContainer} onPress={openFacebook}>
        <Ionicons name="logo-facebook" size={24} color="#1e90ff" />
        <Text style={[styles.contactText, {  marginLeft: 8 }]}>Algiers Stock Exchange</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.facebookContainer} onPress={openYoutube}>
      <Ionicons name="logo-youtube" size={24} color="red" />
        <Text style={[styles.contactText, {  marginLeft: 8 }]}>bourse d'alger (SGBV)</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.facebookContainer} onPress={openFLinkdin}>
        <Ionicons name="logo-twitter" size={24} color="#00bfff" />
        <Text style={[styles.contactText, {  marginLeft: 8 }]}>bourse_alger</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.facebookContainer} onPress={opentwitter}>
        <Ionicons name="logo-linkedin" size={24} color="#4169e1" />
        <Text style={[styles.contactText, {  marginLeft: 8 }]}>La Bourse d'Alger sgbv</Text>
      </TouchableOpacity>
     
    
    
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 25,
    marginTop: 10,
    marginBottom:17,
  },
  link: {
    
    textDecorationLine: 'underline',
    marginLeft: 10,
    fontSize: 18,
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 25,
   
  },
  contactText: {
    marginLeft: 10,
    fontSize: 18,
  },
  contact: {
    fontSize: 18,
    marginLeft: 25,
    marginTop: 10,
  },
  head: {
    paddingTop: 40,
    paddingBottom: 10,
    paddingLeft: 5,
    flexDirection: 'row',
  },
  map: {
    width: '100%',
    height: '30%',
  },
  facebookContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom:10,
    marginLeft: 25,
  },
});

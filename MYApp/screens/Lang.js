import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { RadioButton } from "react-native-paper"; // Import RadioButton from the appropriate library

export default function Lang() {
  const [language, setLanguage] = useState("english"); // State to track the selected language

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.head, { backgroundColor: 'cadetblue' }]}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 6 }}>
          Languages
        </Text>
      </View>
      <View style={styles.radioButtonContainer}>
        <View style={styles.radioButton}>
          <Text>Arabe</Text>
          <RadioButton
            value="arabic"
            status={language === 'arabic' ? 'checked' : 'unchecked'}
            onPress={() => setLanguage('arabic')}
          />
        </View>
        <View style={styles.radioButton}>
          <Text>Anglais</Text>
          <RadioButton
            value="english"
            status={language === 'english' ? 'checked' : 'unchecked'}
            onPress={() => setLanguage('english')}
          />
        </View>
        <View style={styles.radioButton}>
          <Text>Francais</Text>
          <RadioButton
            value="french"
            status={language === 'french' ? 'checked' : 'unchecked'}
            onPress={() => setLanguage('french')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  head: {
    paddingTop: 40,
    paddingBottom: 10,
    paddingLeft: 5,
    flexDirection: 'row'
  },
  radioButtonContainer: {
    marginTop: 20,
    marginLeft: 10,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});

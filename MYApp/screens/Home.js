import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import ReadMore from 'react-native-read-more-text';

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={[styles.head, { backgroundColor: 'cadetblue' }]}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 6 }}>
            Actualité
          </Text>
        </View>
        <ReadMore
          numberOfLines={3}
          renderTruncatedFooter={this._renderTruncatedFooter}
          renderRevealedFooter={this._renderRevealedFooter}
        >
          <Text style={styles.Text}>
            gggghhhjfdsawertyuiol,mnbvcxzff gggghhhjfdsawertyuiol,mnbvcxzff
            gggghhhjfdsawertyuiol,mnbvcxzff gggghhhjfdsawertyuiol,mnbvcxzff
            gggghhhjfdsawertyuiol,mnbvcxzff gggghhhjfdsawertyuiol,mnbvcxzff
            gggghhhjfdsawertyuiol,mnbvcxzff gggghhhjfdsawertyuiol,mnbvcxzff
            gggghhhjfdsawertyuiol,mnbvcxzff
          </Text>
        </ReadMore>
      </SafeAreaView>
    );
  }

  _renderTruncatedFooter = (handlePress) => {
    return (
      <Text style={{ color: "#CACACA", marginTop: 5 }} onPress={handlePress}>
        read more
      </Text>
    );
  };

  _renderRevealedFooter = (handlePress) => {
    return (
      <Text style={{ color: "#000", marginTop: 5 }} onPress={handlePress}>
        read less
      </Text>
    );
  };
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
  head: {
    paddingTop: 40,
    paddingBottom: 10,
    paddingLeft: 5,
    flexDirection: 'row',
  },
});

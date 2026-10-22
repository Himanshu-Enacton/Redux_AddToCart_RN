import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import Header from './Header';
import Products from './Products';

export default function ProductWrapper({ navigation }:any) {
  return (
    <View style={styles.flex}>
      <Header navigation={navigation} />
      <ScrollView>
        <Products />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  flex:{flex:1},
})
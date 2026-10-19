import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import Header from './Header';
import Products from './Products';

export default function ProductWrapper({ navigation }) {
  return (
    <View style={{flex:1}}>
      <Header navigation={navigation} />
      <ScrollView>
        <Products />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});

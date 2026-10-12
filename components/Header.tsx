import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Header() {
  const [cartItem, setCartItem] = useState(0);
  const cartData = useSelector((state)=>state.reducer)
  console.warn(cartData);
  useEffect(()=>{
    setCartItem(cartData.length)
  },[cartData])
  
  return (
    <View style={styles.container}>
      <Text style = {styles.text}>{cartItem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{padding: 10,
    backgroundColor: 'orange',
    flexDirection: 'row-reverse',
  },
  text:{fontSize: 30,
    backgroundColor: 'yellow',
    padding:10,
    borderRadius:100,
    paddingHorizontal:22
  }
});

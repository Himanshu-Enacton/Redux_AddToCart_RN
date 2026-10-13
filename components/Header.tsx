import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

export default function Header() {
  const cartData = useSelector((state:any)=>state.reducer)
  const cartItem = cartData.length;
  console.warn(cartData);
  
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

import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { addToCart, removeToCart } from './redux/action';
import { useDispatch, useSelector } from 'react-redux';

export type Item = {
  id: number;
  name: string;
  color: string;
  price: number;
  image: string;
}
export default function Products() {  
  const products = [
    {
      id:1,
      name: 'iPhone 15 Pro',
      color: 'Natural Titanium',
      price: 29999,
      image:
        'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800',
    },
    {
      id:2,
      name: 'Samsung Galaxy S24',
      color: 'Onyx Black',
      price: 27999,
      image:
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800',
    },
    {
      id:3,
      name: 'Google Pixel 8',
      color: 'Obsidian',
      price: 26999,
      image:
        'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800',
    },
    {
      id:4,
      name: 'Samsung S25 Ultra',
      color: 'butterfly white',
      price: 127999,
      image:
        'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800',
    },
  ];
  const cartItem = useSelector((state:any) => state.reducer)
  const dispatch = useDispatch()
  const handleAddToCart = (item: Item)=>{
    dispatch(addToCart(item))
  }
  const handleReomveToCart = (data:any)=>{
    dispatch(removeToCart(data))
  }
  return (
    <View>
      {products.map((item) =>{
        const isAdded = cartItem.some(
          (itemInCart:any)=> itemInCart.id === item.id
        )
        return(
        <View key={item.id} style={styles.container}>
          <Image style={styles.mobileImage} source={{ uri: item.image }} />

          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.text}>{item.color}</Text>
          <Text style={styles.text}>{item.price}</Text>
          {isAdded?
          <Button onPress={()=>handleReomveToCart(item.id)} title="remove" />
          :
          <Button onPress={()=>handleAddToCart(item)} title="Add to cart" />
          }
        </View>
      )})}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
  },
  container: {
    backgroundColor: 'skyblue',
    marginHorizontal: 100,
    paddingVertical: 10,
    margin: 6,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    elevation: 10,
  },
  mobileImage: {
    borderRadius: 15,
    height: 150,
    width: 100,
  },
});

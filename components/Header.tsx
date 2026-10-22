import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import type { CartItem } from './Products';

export default function Header({ navigation }: { navigation: any }) {
  const cartItems = useSelector(
    (state: { reducer: CartItem[] }) => state.reducer,
  );
  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View>
          <Text style={styles.eyebrow}>DISCOVER</Text>
          <Text style={styles.title}>New In</Text>
        </View>
        <TouchableOpacity
          style={styles.cartButton}
          activeOpacity={0.75}
          onPress={() => {
            navigation.navigate('List');
          }}
        >
          <View style={styles.bagIcon}>
            <View style={styles.bagHandle} />
          </View>
          {cartItemCount > 0 ? (
            <View style={styles.countBadge}>
              <Text style={styles.count}>{cartItemCount}</Text>
            </View>
          ) : null}
        </TouchableOpacity>
      </View>
      <Text style={styles.subtitle}>The latest phones, selected for you</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f4',
    paddingHorizontal: 18,
    paddingTop: 23,
    paddingBottom: 18,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  eyebrow: {
    fontSize: 10,
    fontWeight: '800',
    color: '#767671',
    letterSpacing: 1.4,
    marginBottom: 4,
  },
  title: {
    fontSize: 29,
    lineHeight: 34,
    fontWeight: '800',
    letterSpacing: -0.8,
    color: '#1e1e1c',
  },
  subtitle: { fontSize: 13, color: '#757570', marginTop: 7 },
  cartButton: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#222',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  bagIcon: {
    width: 18,
    height: 16,
    marginTop: 5,
    borderWidth: 1.8,
    borderColor: '#272725',
    borderRadius: 3,
    alignItems: 'center',
  },
  bagHandle: {
    position: 'absolute',
    width: 9,
    height: 7,
    top: -7,
    borderWidth: 1.8,
    borderColor: '#272725',
    borderBottomWidth: 0,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  countBadge: {
    position: 'absolute',
    top: -3,
    right: -2,
    minWidth: 19,
    height: 19,
    paddingHorizontal: 4,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#292927',
    borderWidth: 2,
    borderColor: '#f6f6f4',
  },
  count: { fontSize: 10, fontWeight: '800', color: '#ffffff' },
});

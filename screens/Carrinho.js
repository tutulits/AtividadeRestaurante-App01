import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Carrinho = ({ cart, removeFromCart, calculateTotal }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.cartContainer}>
        {cart.length === 0 ? (
          <Text style={styles.emptyCartText}>Seu carrinho está vazio :D</Text>
        ) : (
          cart.map((product) => (
            <View key={product.id} style={styles.cartItem}>
              <Image source={product.image} style={styles.productImage} />{' '}
              {/* Fixed here */}
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>R$ {product.price}</Text>
                <TouchableOpacity
                  onPress={() => removeFromCart(product.id)}
                  style={styles.removeButton}>
                  <Text style={styles.removeButtonText}>Remover</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
      </ScrollView>

      {cart.length > 0 && (
        <View style={styles.footer}>
          <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
          <TouchableOpacity
            onPress={() => alert('Compra realizada!')}
            style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Comprar</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  cartContainer: {
    flex: 1,
  },
  cartItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  productInfo: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 18,
    fontWeight: '600',
  },
  productPrice: {
    fontSize: 16,
    color: '#e20c03',
  },
  removeButton: {
    marginTop: 5,
    backgroundColor: '#e20c03',
    padding: 5,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  emptyCartText: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
  },
  footer: {
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingBottom: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  buyButton: {
    backgroundColor: '#e20c03',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Carrinho;

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ProductDetailsScreen = ({ route, addToCart }) => {
  const { product } = route.params;
  const navigation = useNavigation();

  const addProductToCart = () => {
    addToCart(product);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra de Status / Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Image source={require('../assets/food2.png')} style={styles.logo} />
      </View>

      {/* Detalhes do Produto */}
      <ScrollView style={styles.detailsContainer}>
        <View style={styles.imageContainer}>
          <Image source={product.image} style={styles.productImage} />
          <TouchableOpacity style={styles.heartButton} onPress={addProductToCart}>
            <Ionicons name="heart" size={28} color="red" />
          </TouchableOpacity>
        </View>
        <Text style={styles.productTitle}>{product.name}</Text>
        <Text style={styles.productPrice}>${product.price}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        <Text style={styles.specificationsTitle}>Especificações:</Text>
        <View style={styles.specificationsList}>
          {product.specifications.map((spec, index) => (
            <Text key={index} style={styles.specificationItem}>
              {spec}
            </Text>
          ))}
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('Compra realizada!')}>
          <Text style={styles.buttonText}>Comprar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#feef1e',
    paddingHorizontal: 10,
  },
  logo: {
    marginLeft: 75,
    width: 190,
    height: 59,
    resizeMode: 'contain',
  },
  detailsContainer: {
    flex: 1,
    padding: 15,
  },
  imageContainer: {
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    marginBottom: 15,
  },
  heartButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 8,
    elevation: 5,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 20,
    color: '#e20c03',
    marginBottom: 15,
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 15,
  },
  specificationsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  specificationsList: {
    marginBottom: 20,
  },
  specificationItem: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#e20c03',
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ProductDetailsScreen;

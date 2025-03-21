import React, { useState, useEffect } from 'react';

import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const HomeScreen = ({ navigation }) => {

  const pratos = [
    {
      id: 1,
      name: 'Risoto de Cogumelos',
      price: 2090,
      image: require('../assets/risoto.jpg'),
      description:
        'Risoto cremoso de cogumelos frescos, perfeito para quem busca um prato reconfortante e sofisticado.',
      specifications: [
        '• Arroz arbóreo',
        '• Cogumelos frescos',
        '• Caldo de legumes caseiro',
      ],
    },
    {
      id: 2,
      name: 'Bife à Parmegiana',
      price: 2099,
      image: require('../assets/bife-parmegiana.jpg'),
      description:
        'Clássico da culinária italiana, com carne de qualidade empanada, coberta com molho de tomate e queijo derretido.',
      specifications: [
        '• Bife de filé mignon',
        '• Queijo muçarela',
        '• Molho de tomate caseiro',
      ],
    },
    {
      id: 3,
      name: 'Feijoada Completa',
      price: 1099,
      image: require('../assets/feijoada.jpg'),
      description:
        'A tradicional feijoada brasileira, servida com arroz, farofa, couve e laranja, uma verdadeira iguaria.',
      specifications: [
        '• Feijão preto',
        '• Carne seca, linguiça, costelinha',
        '• Acompanhamentos: arroz, farofa, couve',
      ],
    },
    {
      id: 4,
      name: 'Frango Grelhado com Legumes',
      price: 1499,
      image: require('../assets/frango-grelhado.jpg'),
      description:
        'Frango grelhado no ponto perfeito, acompanhado de legumes frescos e assados.',
      specifications: [
        '• Peito de frango',
        '• Legumes sazonais',
        '• Temperos frescos',
      ],
    },
  ];

  const bebidas = [
    {
      id: 5,
      name: 'Cerveja Artesanal IPA',
      price: 4299,
      image: require('../assets/cerveja-ipa.jpg'),
      description:
        'Cerveja artesanal de sabor intenso, com notas de lúpulo e um final amargo que conquista os apreciadores.',
      specifications: [
        '• 6,5% de álcool',
        '• Notas cítricas e amargas',
        '• Produção artesanal',
      ],
    },
    {
      id: 6,
      name: 'Caipirinha de Limão',
      price: 8499,
      image: require('../assets/caipirinha.jpg'),
      description:
        'A caipirinha clássica, feita com cachaça de qualidade, limão fresco e açúcar.',
      specifications: [
        '• Cachaça artesanal',
        '• Limão fresco',
        '• Açúcar mascavo',
      ],
    },
    {
      id: 7,
      name: 'Suco de Laranja Natural',
      price: 6499,
      image: require('../assets/suco-laranja.jpg'),
      description:
        'Suco fresco e natural, feito com laranjas selecionadas e sem conservantes.',
      specifications: [
        '• Laranjas frescas',
        '• Sem conservantes',
        '• Rico em vitamina C',
      ],
    },
    {
      id: 8,
      name: 'Smoothie de Morango',
      price: 3199,
      image: require('../assets/smoothie-morango.jpg'),
      description:
        'Delicioso smoothie cremoso, feito com morangos frescos e iogurte natural.',
      specifications: [
        '• Morangos frescos',
        '• Iogurte natural',
        '• Mel orgânico',
      ],
    },
  ];

  const sobremesas = [
    {
      id: 9,
      name: 'Tiramisu',
      price: 2499,
      image: require('../assets/tiramisu.jpg'),
      description:
        'Sobremesa italiana clássica, feita com camadas de biscoitos embebidos em café e mascarpone.',
      specifications: [
        '• Café expresso',
        '• Queijo mascarpone',
        '• Cacau em pó',
      ],
    },
    {
      id: 10,
      name: 'Pavê de Chocolate',
      price: 2199,
      image: require('../assets/pave-chocolate.jpg'),
      description:
        'Delicioso pavê de chocolate cremoso, com camadas de biscoitos e cobertura de chocolate derretido.',
      specifications: [
        '• Chocolate amargo',
        '• Biscoito champagne',
        '• Creme de leite',
      ],
    },
    {
      id: 11,
      name: 'Mousse de Maracujá',
      price: 3499,
      image: require('../assets/mousse-maracuja.jpg'),
      description:
        'Mousse leve e aerada de maracujá, com um toque azedinho e doce na medida certa.',
      specifications: [
        '• Maracujá fresco',
        '• Creme de leite',
        '• Açúcar',
      ],
    },
    {
      id: 12,
      name: 'Cheesecake de Frutas Vermelhas',
      price: 899,
      image: require('../assets/cheesecake.jpg'),
      description:
        'Cheesecake cremosa, coberta com uma calda deliciosa de frutas vermelhas.',
      specifications: [
        '• Cream cheese',
        '• Frutas vermelhas',
        '• Base de biscoito',
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/food2.png')} style={styles.logo} />
      </View>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.sectionTitle}>Pratos Principais</Text>
        <View style={styles.scrollContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {pratos.map((product) => (
              <TouchableOpacity
                key={product.id}
                style={styles.productContainer}
                onPress={() =>
                  navigation.navigate('ProductDetails', { product })
                }>
                <Image source={product.image} style={styles.productImage} />
                <Text style={styles.productTitle}>{product.name}</Text>
                <Text style={styles.productPrice}>R$ {product.price}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <Text style={styles.sectionTitle}>Bebidas</Text>
        <View style={styles.scrollContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {bebidas.map((product) => (
              <TouchableOpacity
                key={product.id}
                style={styles.productContainer}
                onPress={() =>
                  navigation.navigate('ProductDetails', { product })
                }>
                <Image source={product.image} style={styles.productImage} />
                <Text style={styles.productTitle}>{product.name}</Text>
                <Text style={styles.productPrice}>R$ {product.price}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <Text style={styles.sectionTitle}>Sobremesas</Text>
        <View style={styles.scrollContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {sobremesas.map((product) => (
              <TouchableOpacity
                key={product.id}
                style={styles.productContainer}
                onPress={() =>
                  navigation.navigate('ProductDetails', { product })
                }>
                <Image source={product.image} style={styles.productImage} />
                <Text style={styles.productTitle}>{product.name}</Text>
                <Text style={styles.productPrice}>R$ {product.price}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#feef1e',
  },
  logo: {
    width: 190,
    height: 59,
    resizeMode: 'contain',
  },
  scrollView: {
    flex: 1,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 10,
  },
  scrollContainer: {
    backgroundColor: '#f0f0f0', // Cor de fundo cinza
    paddingVertical: 10,
    borderRadius: 8,
  },
  productContainer: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 180,
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  productPrice: {
    fontSize: 14,
    color: '#e20c03',
  },
});

export default HomeScreen;

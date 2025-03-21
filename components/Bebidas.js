import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Bebidas from '../components/bebidas/Suco';

const Stack = createStackNavigator();

export default function App() {
  const [favorito, setFavorito] = useState([
    { id: 1, imagem: require('./assets/coca.jpg'), nome: 'Coca Cola', tamanho: '300ml', preco: 'R$ 6,99', favorito: false },
    { id: 2, imagem: require('./assets/pepsi-5152332_640.jpg'), nome: 'Pepsi', tamanho: '350 ml', preco: 'R$ 5,99', favorito: false },
    { id: 3, imagem: require('./assets/sprite.png'), nome: 'Sprite', tamanho: '300ml', preco: 'R$ 5,99', favorito: false },
    { id: 4, imagem: require('./assets/fantalaranja.jpg'), nome: 'Fanta Laranja', tamanho: '300 ml', preco: 'R$ 4,99', favorito: false },
    { id: 5, imagem: require('./assets/fantauva.jpg'), nome: 'Fanta Uva', tamanho: '300 ml', preco: 'R$ 4,99', favorito: false },
    { id: 6, imagem: require('./assets/pepsilimao.png'), nome: 'Pepsi Limão', tamanho: '300 ml', preco: 'R$ 4,99', favorito: false },
    { id: 7, imagem: require('./assets/cocazero.png'), nome: 'Coca Cola Zero', tamanho: '300 ml', preco: 'R$ 4,99', favorito: false },
  ]);

  const Heart = (id) => {
    const novosCards = favorito.map(card =>
      card.id === id ? { ...card, favorito: !card.favorito } : card
    );
    setFavorito(novosCards);
  };

  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) => (
            <ScrollView>

            <View style={styles.container}>
              <Image 
              source={require('./assets/logo.webp')}
              style={styles.logo}
              />
              {favorito.map((card) => (
                
                <TouchableOpacity
                  key={card.id}
                  onPress={() => props.navigation.navigate('Bebidas', { card })}
                >
                  <View style={styles.cardBebida}>
                    <Image source={card.imagem} style={styles.img} />
                    <View style={styles.coracaoLogo}>
                      <Text style={styles.textoCard}>{card.nome}</Text>
                      <Text style={styles.texto}>{card.tamanho}</Text>
                      <Text style={styles.preco}>{card.preco}</Text>
                    </View>
                    <TouchableOpacity onPress={() => Heart(card.id)} style={styles.coracao}>
                      <FontAwesome
                        name={card.favorito ? "heart" : "heart-o"}
                        size={20}
                        color={card.favorito ? "red" : "gray"}
                      />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              ))}
              <StatusBar style="auto" />
            </View>
            </ScrollView>
          )}
        </Stack.Screen>

        <Stack.Screen name="Bebidas" component={Bebidas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  cardBebida: {
    flexDirection: 'row',
    backgroundColor: '#DCDCDC',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    width: 340,
    alignItems: 'center',
    marginTop: 14
  },
  coracaoLogo: {
    flex: 1,
  },
  img: {
    height: 80,
    width: 50,
    borderRadius: 8,
    marginRight: 15,
  },
  textoCard: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  texto: {
    fontSize: 14,
    color: '#000',
    marginTop: 5,
  },
  preco: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#ff6347',
    marginTop: 5,
  },
  coracao: {
    padding: 1,
    marginTop: -50,
  },
  logo: {
    height: 200,
    width: 417,
    marginLeft: -5,
    marginBottom: 10
  }
});

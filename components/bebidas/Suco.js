import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

export default function Bebidas({ route }) {
  const { card } = route.params;

  const Alerta = () => {
    Alert.alert('Produto adicionado ao carrinho 🛒');
  };

  return (
    <View style={styles.container}>
      <View style={styles.fundoCard}>
       <Image source={card.imagem} style={styles.img} />
       <Text style={styles.textoCard}>{card.nome}</Text>
       <Text style={styles.texto}>{card.tamanho}</Text>
       <Text style={styles.preco}>{card.preco}</Text>
       <TouchableOpacity style={styles.botao} onPress={Alerta}>
       <Text style={styles.btn}>Adicionar ao carrinho</Text>
       </TouchableOpacity>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f5',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  img: {
    height: 200,
    width: 100,
    borderRadius: 8,
    marginBottom: 20,
    marginTop: -40,
    marginLeft: 110
  },
  textoCard: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 12,

  },
  texto: {
    fontSize: 18,
    color: '#000',
    marginTop: 5,
    marginLeft: 12,
  },
  preco: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#ff6347',
    marginTop: -53,
    marginLeft: 245
  },
  botao: {
    backgroundColor: '#e20c03',
    width: 325,
    borderRadius: 8,
    marginTop: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
    padding: 8,
    marginLeft: -10,
  },
  btn: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  fundoCard: {
    backgroundColor: '#fff',
    paddingVertical: 65,
    paddingLeft: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
    marginBottom: 50
  }
});

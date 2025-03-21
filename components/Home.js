import { StatusBar } from 'expo-status-bar';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.titulo}>Explore 👩‍🍳</Text>

        <View style={{ height: 190 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.navegacao}>
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('Cardapio')}>
                <Text style={styles.emoji}>🍽️</Text>
                <Text style={styles.texto}>Cardapio</Text>
                <Text style={styles.texto}>↗</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('Sobremesas')}>
                <Text style={styles.emoji}>🍰</Text>
                <Text style={styles.texto}>Sobremesas</Text>
                <Text style={styles.texto}>↗</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('Bebidas')}>
                <Text style={styles.emoji}>🍷</Text>
                <Text style={styles.texto}>Bebidas</Text>
                <Text style={styles.texto}>↗</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.card}>
                <Text style={styles.emoji}>🍔</Text>
                <Text style={styles.texto}>Outros</Text>
                <Text style={styles.texto}>↗</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Sobremesas')}>
          <ImageBackground
            style={styles.card2}
            resizeMode="cover"
            source={require('../assets/fundo sorvete.png')}>
            <View>
              <Text style={styles.texto2}>Você gosta de</Text>
              <Text style={styles.texto2}>sobremesas?</Text>
            </View>
            <TouchableOpacity
              style={styles.botao}
              onPress={() => navigation.navigate('Sobremesas')}>
              <Text style={styles.textobotao}>Claro ↗</Text>
            </TouchableOpacity>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Cardapio')}>
          <ImageBackground
            style={styles.card2}
            resizeMode="cover"
            source={require('../assets/fundo sorvete.png')}>
            <View>
              <Text style={styles.texto2}>Acesse o</Text>
              <Text style={styles.texto2}>cardápio!</Text>
            </View>
            <TouchableOpacity
              style={styles.botao}
              onPress={() => navigation.navigate('Cardapio')}>
              <Text style={styles.textobotao}>Cardápio ↗</Text>
            </TouchableOpacity>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Bebidas')}>
          <ImageBackground
            style={styles.card2}
            resizeMode="cover"
            source={require('../assets/fundo sorvete.png')}>
            <View>
              <Text style={styles.texto2}>Você gosta de</Text>
              <Text style={styles.texto2}>bebidas?</Text>
            </View>
            <TouchableOpacity
              style={styles.botao}
              onPress={() => navigation.navigate('Bebidas')}>
              <Text style={styles.textobotao}>Claro ↗</Text>
            </TouchableOpacity>
          </ImageBackground>
        </TouchableOpacity>
      </ScrollView>

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    display: 'flex',
    gap: 10,
    paddingHorizontal: 20,
  },
  botao: {
    backgroundColor: '#411e13',
    width: '40%',
    borderRadius: 30,
    height: 35,
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginBottom: 30,
    padding: 20,
    borderRadius: 20,
    gap: 10,
    shadowColor: '#411e13',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 9,
    elevation: 3,
  },
  card2: {
    justifyContent: 'center',
    backgroundColor: 'white',
    marginBottom: 30,
    padding: 30,
    borderRadius: 35,
    gap: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 9,
    elevation: 3,
    overflow: 'hidden',
    height: 200,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 700,
    marginBottom: 20,
    color: '#411e13',
    paddingTop: 10,
  },
  texto: {
    fontWeight: 700,
    color: '#411e13',
  },
  texto2: {
    fontWeight: 500,
    fontSize: 25,
    color: '#411e13',
  },
  textobotao: {
    fontWeight: 400,
    color: 'white',
    textAlign: 'center',
  },
  navegacao: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    paddingVertical: 10,
    paddingHorizontal: 1,
    alignSelf: 'flex-start',
  },
  emoji: {
    fontSize: 25,
  },
});

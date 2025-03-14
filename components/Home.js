import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  // const Alert = () => {
  //     alert('ooo')
  // }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Explore 👩‍🍳</Text>

      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.navegacao}>
            <TouchableOpacity style={styles.card} /*onPress={Alert}*/>
              <Text style={styles.emoji}>🍽️</Text>
              <Text style={styles.texto}>Cardapio</Text>
              <Text style={styles.texto}>↗</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <Text style={styles.emoji}>🍰</Text>
              <Text style={styles.texto}>Sobremesas</Text>
              <Text style={styles.texto}>↗</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
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

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    display: "flex",
    gap: 10,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  card: {
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: 30,
    padding: 20,
    borderRadius: 20,
    gap: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 9,
    elevation: 3,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 700,
  },
  texto: {
    fontWeight: 700,
  },
  navegacao: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    paddingVertical: 10,
    paddingHorizontal: 1,
  },
  emoji: {
    fontSize: 25,
  },
});

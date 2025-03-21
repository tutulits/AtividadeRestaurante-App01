import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, Text, Button, View } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

import HomeScreen from './screens/HomeScreen';
import Carrinho from './screens/Carrinho';
import ProductDetailsScreen from './screens/ProductDetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack({ addToCart }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home">
        {(props) => <HomeScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen name="ProductDetails">
        {(props) => <ProductDetailsScreen {...props} addToCart={addToCart} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0).toFixed(2);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#e20c03',
        }}>
        <Tab.Screen
          name="Home"
          children={(props) => <HomeStack {...props} addToCart={addToCart} />}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Carrinho"
          children={(props) => (
            <Carrinho
              {...props}
              cart={cart}
              removeFromCart={removeFromCart}
              calculateTotal={calculateTotal}
            />
          )}
          options={{
            tabBarIcon: ({ color }) => (
              <View style={{ position: 'relative' }}>
                <Ionicons name="cart" size={24} color={color} />
                {cart.length > 0 && (
                  <View
                    style={{
                      position: 'absolute',
                      top: -4,
                      right: -4,
                      backgroundColor: 'red',
                      borderRadius: 8,
                      width: 16,
                      height: 16,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{ color: 'white', fontSize: 10 }}>
                      {cart.length}
                    </Text>
                  </View>
                )}
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

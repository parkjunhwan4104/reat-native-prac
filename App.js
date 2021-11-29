import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Test from './test';
import Login from './login';
export default function App() {

  const [count, setCount] = useState(0);
  const arr = [1,3,4,5,6,7,]
    return (
      <Login/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import ProductCard from './components/ProductCard';
import prodData from './prodData.json';

function App(): React.JSX.Element {
  const prodRender = ({item}) => <ProductCard prod={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>PATIKASTORE</Text>
      <TextInput style={styles.searchInput} placeholder="Ara..."></TextInput>
      <FlatList data={prodData} renderItem={prodRender} numColumns={2} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  headerTitle: {
    fontSize: 32,
    color: '#483285',
    fontWeight: 'bold',
  },
  searchInput: {
    backgroundColor: '#eee',
    borderRadius: 10,
    padding: 10,
    fontSize: 20,
    marginTop: 10,
    marginBottom: 5,
  },
});

export default App;

import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';

const ProductCard = ({prod}) => {
  return (
    <View style={styles.prodContainer}>
      <View style={styles.prodImageContainer}>
        <Image
          style={styles.prodImage}
          source={{uri: prod.imgURL}}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.prodTitle}>{prod.title}</Text>
      <Text style={styles.prodPrice}>{prod.price}</Text>
      {!prod.inStock ? <Text style={styles.stockStatus}>STOKTA YOK</Text> : ''}
    </View>
  );
};

const styles = StyleSheet.create({
  prodContainer: {
    backgroundColor: '#edeff0',
    flex: 1,
    justifyContent: 'space-around',
    margin: 5,
    borderRadius: 5,
    padding: 10,
  },
  prodTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
  },
  prodImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  prodImage: {
    flex: 1,
    width: '100%',
    height: Dimensions.get('window').height / 4,
  },
  prodPrice: {
    color: '#808080',
    fontWeight: 'bold',
  },
  stockStatus: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default ProductCard;

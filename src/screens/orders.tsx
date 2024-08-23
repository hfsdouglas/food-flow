import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Orders() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedidos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  }
});

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button } from 'react-native';

type RootStackParamList = {
  Orders: undefined;
}

type ProductsProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>
}

export default function Payment({ navigation }: ProductsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pagamento</Text>
      <Button title="Pedidos" onPress={() => navigation.navigate('Orders') }/>
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
})
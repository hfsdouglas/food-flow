import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button } from 'react-native';

type RootStackParamList = {
  Pagamento: undefined;
}

type ShippingProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>
}

export default function Shipping({ navigation }: ShippingProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrega</Text>
      <Button title="Pagamento" onPress={() => navigation.navigate('Pagamento') }/>
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
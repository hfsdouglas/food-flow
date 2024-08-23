import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button } from 'react-native';

type RootStackParamList = {
  Entrega: undefined;
}

type BagProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>
}

export default function Bag({ navigation }: BagProps) {
  return (
    <View>
      <Text>Sacola</Text>
      <Button title="Entrega" onPress={() => navigation.navigate('Entrega') }/>
    </View>
  );
}
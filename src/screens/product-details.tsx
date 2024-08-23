import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text, View } from 'react-native';

type RootStackParamList = {
  StackBagRoutes: undefined;
}

type ProductDetailsProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>
}

export default function ProductDetails({ navigation }: ProductDetailsProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Produto - Detalhes</Text>
            <Button title="Sacola" onPress={() => navigation.navigate('StackBagRoutes') }/>
        </View>
    )
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
  
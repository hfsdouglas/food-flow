import { Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Detalhes: undefined;
}

type ProductsProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>
}

import { ProductsHeader } from '@/components/products-header';
import ProductCard from '@/components/product-card';

export default function Products({ navigation }: ProductsProps) {
  return (
    <View className="flex-1">
      <ProductsHeader />
      
      <View className="p-5">
        <View>
          <Text className="font-bold text-slate-400">BROWNIE</Text>
        </View>
        
        <ProductCard onPress={() => navigation.navigate('Detalhes')}/> 
      </View>
    </View>
  );
}

{/* <Button title="Produto - Detalhes" onPress={ }/> */}

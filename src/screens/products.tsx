import { SectionList, Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Detalhes: undefined;
}

type ProductsProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>
}

import { ProductsHeader } from '@/components/products-header';
import { ProductCard } from '@/components/product-card';

import { MENU } from '@/utils/products';

export default function Products({ navigation }: ProductsProps) {
  return (
    <View className="flex-1">
      <ProductsHeader />
      
      <SectionList 
        sections={MENU} 
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard onPress={() => navigation.navigate('Detalhes')} product={item}/> 
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text className="text-xl text-slate-400 font-bold mt-5">{title}</Text>
        )}
        className="flex-1 p-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        stickySectionHeadersEnabled={false}
      />
    </View>
  );
}

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Detalhes: undefined;
}

export type ProductsProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>
}

import { ProductBody } from '@/components/product-body';

import { SearchModeProvider } from '@/hooks/useSeachMode';

export default function Products({ navigation }: ProductsProps) { 
  return (
    <SearchModeProvider>
      <ProductBody navigation={navigation} />
    </SearchModeProvider>
  );
}

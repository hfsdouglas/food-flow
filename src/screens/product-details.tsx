import { Button } from '@/components/button';
import { colors } from '@/styles/colors';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Minus, Plus } from 'lucide-react-native';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

type RootStackParamList = {
  StackBagRoutes: undefined;
}

type ProductDetailsProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>
}

export default function ProductDetails({ navigation }: ProductDetailsProps) {
    return (
      <ScrollView className='p-5'>
        <View className='bg-slate-900 p-6 mb-5 rounded-lg h-[2000px]'>
          <View className='items-center gap-5'>
            <View className='w-[102px] h-[102px] bg-red-400 rounded-md'></View>
            <Text className='text-xl font-bold text-center text-slate-400'>Brownie PERFEITO - recheado com doce de leite vegano</Text>
          </View>

          <View className='flex-row flex-1 mt-5'>
            <Text className='text-lime-300 font-bold text-xl flex-1'>R$ 52,00</Text>

            <View className='flex-row gap-7'>
              <TouchableOpacity className='h-6 w-6 bg-red-400/85 rounded-full justify-center items-center'>
                <Minus color={colors.slate['900']} size={16} />
              </TouchableOpacity>

              <Text className='text-lg text-slate-400'>1</Text>

              <TouchableOpacity className='h-6 w-6 bg-lime-300/85 rounded-full justify-center items-center'>
                <Plus color={colors.slate['900']} size={16}/>
              </TouchableOpacity>
            </View>
          </View>

          <View></View>
        </View>

        <Button className='mb-10'>
          <Button.Title>Adicionar</Button.Title>
        </Button>
      </ScrollView>
    )
}

{/* <Button title="Sacola" onPress={() => navigation.navigate('StackBagRoutes') }/> */}
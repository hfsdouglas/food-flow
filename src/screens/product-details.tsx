import { Button } from '@/components/button';
import { Card } from '@/components/card';
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
        <Card>
          <View className='items-center gap-5'>
            <View className='w-[102px] h-[102px] bg-red-400 rounded-md'></View>
            <Text className='text-xl font-bold text-center text-slate-400'>Brownie PERFEITO - recheado com doce de leite vegano</Text>
          </View>

          <View className='flex-row mt-8'>
            <Text className='text-lime-300 font-bold text-xl flex-1'>R$ 52,00</Text>

            <View className='flex-row gap-7 items-center'>
              <TouchableOpacity className='h-6 w-6 bg-red-400/85 rounded-full justify-center items-center'>
                <Minus color={colors.slate['900']} size={16} />
              </TouchableOpacity>

              <Text className='text-lg text-slate-400'>1</Text>

              <TouchableOpacity className='h-6 w-6 bg-lime-300/85 rounded-full justify-center items-center'>
                <Plus color={colors.slate['900']} size={16}/>
              </TouchableOpacity>
            </View>
          </View>

          <View className='mt-8'>
            <Text className='text-slate-400 font-bold text-xl'>DESCRIÇÃO</Text>

            <Text className='text-slate-400 mt-5'>
              *ATENÇÃO: este produto NÃO É VEGANO.
              Ele não contém leite e derivados (sem caseína), mas contém OVOS orgânicos na massa. 
              {"\n\n"}
              Ingredientes:
              Chocolate 70% cacau adoçado com açúcar de coco (massa de cacau, manteiga de cacau e açúcar de coco), doce de leite da Padoca (leite de castanha de caju e coco, açúcar de coco e extrato natural de baunilha), ovo orgânico, açúcar de coco, açúcar demerara, óleo de coco extra virgem, farinha de amêndoas, cacau em pó 100%, farinha de arroz e sal marinho.
              {"\n\n"}
              Informação nutricional: {"\n"}Por 100 g (75 g = aprox. 1/4 da embalagem, %VD*): Valor energético 443 kcal (332 kcal, 17%) {"\n"}• Carboidratos 44 g (33 g, 11%), dos quais Açúcares totais 34 g (26 g), Açúcares adicionados 34g (25 g, 50%) {"\n"}• Proteínas 7.1 g (5.3 g, 11%) {"\n"}• Gorduras totais 26 g (20 g, 31%), das quais Gorduras saturadas 16 g (12 g, 60%), Gorduras trans 0 g (0 g, 0%) {"\n"}• Fibras alimentares 4.7 g (3.5 g, 14%) {"\n"}• Sódio 98 mg (73 mg, 4%).
              {"\n\n"}
              Características: vendido em forma de papel forneável no formato quadrado 10x10cm - peso aproximado de 280g-300g – brownie chocolatudo, úmido e com recheio do nosso doce de leite vegano. Dica: você pode consumir ele em temperatura ambiente ou aquecer rapidamente no microondas. Para uma sobremesa deliciosa, sirva com sorvete ou sorbet.
              {"\n\n"}
              Validade: Válido por até 7 dias em temperatura ambiente, 15 dias na geladeira ou por até 3 meses congelado (a partir da data de fabricação).
              {"\n\n"}
              Dica de conservação e consumo: Você pode congelar seu ovetto brownie e, na hora de consumir, deixe em temperatura ambiente por 30 min. Consuma em seguida ou aqueça em micoondas para consumir quente.
            </Text>
          </View>

          <View className='mt-8'>
            <Text className='text-slate-400 font-bold text-xl'>ADICIONAIS</Text>

            <View className='flex-row mt-5'>
              <View className='flex-row flex-1'>
                <View>
                  <Text className='text-slate-400 font-regular'>Chocolate - 70% Cacau</Text>
                  <Text className='text-slate-400 font-bold text-sm'>R$ 10,00</Text>
                </View>
              </View>

              <View className='flex-row gap-7 items-center'>
                <TouchableOpacity className='h-6 w-6 bg-red-400/85 rounded-full justify-center items-center'>
                  <Minus color={colors.slate['900']} size={16} />
                </TouchableOpacity>

                <Text className='text-lg text-slate-400'>1</Text>

                <TouchableOpacity className='h-6 w-6 bg-lime-300/85 rounded-full justify-center items-center'>
                  <Plus color={colors.slate['900']} size={16}/>
                </TouchableOpacity>
              </View>
            </View>

            <View className='flex-row mt-8'>
              <View className='flex-row flex-1'>
                <View>
                  <Text className='text-slate-400 font-regular'>Sorvete - Creme</Text>
                  <Text className='text-slate-400 font-bold text-sm'>R$ 10,00</Text>
                </View>
              </View>

              <View className='flex-row gap-7 items-center'>
                <TouchableOpacity className='h-6 w-6 bg-red-400/85 rounded-full justify-center items-center'>
                  <Minus color={colors.slate['900']} size={16} />
                </TouchableOpacity>

                <Text className='text-lg text-slate-400'>1</Text>

                <TouchableOpacity className='h-6 w-6 bg-lime-300/85 rounded-full justify-center items-center'>
                  <Plus color={colors.slate['900']} size={16}/>
                </TouchableOpacity>
              </View>
            </View>

            <View className='flex-row mt-8'>
              <View className='flex-row flex-1'>
                <View>
                  <Text className='text-slate-400 font-regular'>Doce de Leite - Vegano</Text>
                  <Text className='text-slate-400 font-bold text-sm'>R$ 10,00</Text>
                </View>
              </View>

              <View className='flex-row gap-7 items-center'>
                <TouchableOpacity className='h-6 w-6 bg-red-400/85 rounded-full justify-center items-center'>
                  <Minus color={colors.slate['900']} size={16} />
                </TouchableOpacity>

                <Text className='text-lg text-slate-400'>1</Text>

                <TouchableOpacity className='h-6 w-6 bg-lime-300/85 rounded-full justify-center items-center'>
                  <Plus color={colors.slate['900']} size={16}/>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Card>

        <Button className='mb-10' onPress={() => navigation.navigate('StackBagRoutes') }>
          <Button.Title>Adicionar</Button.Title>
        </Button>
      </ScrollView>
    )
}
import { Pressable, Text, View } from "react-native";
import { Search } from "lucide-react-native";

import { colors } from "@/styles/colors";

import { Button } from "@/components/button";
import { TabLoja, TabPedidos, TabPerfil, TabProducts } from "@/components/tab-itens";

export default function Main() {
    return (
        <View className="flex-1 relative">
            <View className="h-52 bg-slate-500/15 p-5">
                <View className="flex-row gap-6">
                    <View className="w-[88px]"></View>

                    <View className="flex-1 gap-1">
                        <Text className="font-bold text-xl text-slate-400">Sua Padaria</Text>
                        <Text className="font-regular text-sm text-slate-400/80">
                            Acesse o cardápio da semana e faça seu pedido. Tudo feito com a nossa melhor energia e intenção!
                        </Text>
                        <Text className="font-bold text-sm text-slate-400/80">
                            Fechado (Segunda-Feira, 07h00 às 18h00)
                        </Text>
                    </View>
                </View>

                <View className="flex-1 flex-row gap-4">
                    <Pressable>
                        <Search color={colors.slate['400']} size={26} />
                    </Pressable>
                    
                    <View>
                        <Button className="h-[28px]"><Button.Title className="text-sm">BROWNIE</Button.Title></Button>
                    </View>
                </View>
            </View>
            
            <View className="absolute bottom-0 w-full h-auto bg-slate-500/15 flex-row justify-around p-4">
                <TabLoja />
                <TabProducts />
                <TabPedidos />
                <TabPerfil />
            </View>
        </View>
    )
}
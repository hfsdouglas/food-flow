import { colors } from "@/styles/colors";
import { Search } from "lucide-react-native";
import { FlatList, Platform, Pressable, Text, View } from "react-native";
import { Button } from "./button";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const data = [
    { title: "BROWNIE" },
    { title: "COOKIES" },
    { title: "BEBIDAS" },
    { title: "PÃES" },
    { title: "DONUTS" },
    { title: "DOCES" },
]

export function ProductsHeader() {
    const insets = useSafeAreaInsets()
    const headerPaddingTop = insets.top >= 47 ? 'pt-12' : 'pt-14'
    const heightCard = Platform.OS === "ios" ? 'h-[235px]' : 'h-64'

    return (
        <View className={`${headerPaddingTop} ${heightCard} bg-slate-900 px-5 pb-5 gap-4`}>
            <View className="flex-row gap-4 mt-4">
                <View className="w-[102px] h-[102px] bg-red-500 border rounded-lg"></View>

                <View className="flex-1 justify-between gap-1">
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
                <Pressable onPress={() => console.log("clicou na pesquisa")}>
                    <Search color={colors.slate['400']} size={26} />
                </Pressable>

                <View className="w-1 bg-slate-400"/>

                <FlatList 
                    data={data} 
                    horizontal
                    showsHorizontalScrollIndicator={false} 
                    renderItem={({item}) => 
                        <Button className="h-[28px] mx-1" variant="secondary">
                            <Button.Title className="text-sm">{item.title}</Button.Title>
                        </Button>
                }/>
            </View>
        </View>
    )
}
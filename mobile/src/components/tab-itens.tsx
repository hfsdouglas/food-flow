import { Pressable, View, Text, PressableProps } from "react-native"
import { CircleUserRound, ScrollText, ShoppingBag, Store } from "lucide-react-native"

import { colors } from "@/styles/colors"

function TabProducts ({...rest}: PressableProps) {
    return (
        <Pressable {...rest}>
            <View className="flex-col gap-1 items-center">
                <ShoppingBag color={colors.slate['400']} size={26} />
                <Text className="text-slate-400 font-bold text-[12px]">Produtos</Text>
            </View>
        </Pressable>
    )
}

function TabLoja ({...rest}: PressableProps) {
    return (
        <Pressable {...rest}>
            <View className="flex-col gap-1 items-center">
                <Store color={colors.slate['400']} size={26} />
                <Text className="text-slate-400 font-bold text-[12px]">Loja</Text>
            </View>
        </Pressable>
    )
}

function TabPedidos ({...rest}: PressableProps) {
    return (
        <Pressable {...rest}>
            <View className="flex-col gap-1 items-center">
                <ScrollText color={colors.slate['400']} size={26} />
                <Text className="text-slate-400 font-bold text-[12px]">Pedidos</Text>
            </View>
        </Pressable>
    )
}

function TabPerfil ({...rest}: PressableProps) {
    return (
        <Pressable {...rest}>
            <View className="flex-col gap-1 items-center">
                <CircleUserRound color={colors.slate['400']} size={26} />
                <Text className="text-slate-400 font-bold text-[12px]">Perfil</Text>
            </View>
        </Pressable>
    )
}

export { TabProducts, TabLoja, TabPedidos, TabPerfil }
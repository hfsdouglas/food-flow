import { Platform, View } from "react-native";

import { TabLoja, TabPedidos, TabPerfil, TabProducts } from "@/components/tab-itens";

import Produtos from "../produtos";

const paddingBottom = Platform.OS === 'ios' ? 'pb-8' : ''

export default function Main() {
    return (
        <View className="flex-1 relative">
            <Produtos />
            
            <View className={`absolute bottom-0 w-full h-auto bg-slate-500/15 flex-row justify-around p-4 ${paddingBottom}`}>
                <TabLoja />
                <TabProducts />
                <TabPedidos />
                <TabPerfil />
            </View>
        </View>
    )
}
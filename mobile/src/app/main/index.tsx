import { View } from "react-native";

import { TabLoja, TabPedidos, TabPerfil, TabProducts } from "@/components/tab-itens";
import { paddingBottom } from "@/styles/sizes";

import Detalhes from "../detalhes/[id]";

export default function Main() {
    return (
        <View className="flex-1 relative">
            <Detalhes />
            
            <View className={`absolute bottom-0 w-full h-auto bg-slate-500/15 flex-row justify-around p-4 ${paddingBottom}`}>
                <TabLoja />
                <TabProducts />
                <TabPedidos />
                <TabPerfil />
            </View>
        </View>
    )
}
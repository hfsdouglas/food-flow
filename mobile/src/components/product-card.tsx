import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

interface Product {
    id: number,
    nome: string, 
    preco: number, 
    text: string, 
    image: string
}

interface ProductCardProps extends TouchableOpacityProps {
    product?: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <TouchableOpacity 
            className="h-36 mt-5 p-3 flex-row gap-3 bg-slate-500/15 rounded-xl"
            activeOpacity={0.9}
        >
            <View className="w-[102px] bg-red-500 border rounded-lg"></View>

            <View className="flex-1 justify-between">
                <Text className="font-bold text-slate-400 text-md">Brownie PERFEITO - recheado com doce de leite vegano</Text>
                <Text className="font-regular text-slate-400/80 text-xs">Chocolate 70% cacau adoçado com açúcar de coco (massa de cacau...</Text>
                <Text className="font-bold uppercase text-lime-400">R$ 52,00</Text>
            </View>
        </TouchableOpacity>
    )
}
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

export type Product = {
    id: string,
    name: string, 
    description: string, 
    value: number
    image?: string 
}

interface ProductCardProps extends TouchableOpacityProps {
    product: Product
}

export function ProductCard({ product, ...rest }: ProductCardProps) {
    const { name, description, value, image } = product

    return (
        <TouchableOpacity 
            className="h-36 p-3 mt-5 flex-row gap-3 bg-slate-900 rounded-xl"
            activeOpacity={0.9}
            {...rest}
        >
            <View className="w-[102px] h-[102px] bg-red-500 border rounded-lg"></View>

            <View className="flex-1 justify-between">
                <Text className="font-bold text-slate-400 text-md">{name}</Text>
                <Text className="font-regular text-slate-400/80 text-xs">{description}</Text>
                <Text className="font-bold uppercase text-lime-400">{value}</Text>
            </View>
        </TouchableOpacity>
    )
}
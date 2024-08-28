import { ReactNode } from "react";
import { View } from "react-native";

type CardProps = {
    children: ReactNode
}

export function Card({ children }: CardProps) {
    return (
        <View className='bg-slate-900 p-6 mb-5 rounded-lg'>
            { children }
        </View>
    )
}
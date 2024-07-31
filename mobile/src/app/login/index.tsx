import { Image, Text, View, StatusBar } from "react-native";

export default function Login() {
    return (
        <View className="flex-1 items-center justify-center gap-2 p-16 bg-zinc-100">
            <StatusBar 
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent
            />

            <Image source={require('@/assets/logotype.png')} alt="Logotipo" />
            <Text className="text-center font-bold text-teal-600 text-md">Potencialize seu restaurante com tecnologia sob medida!</Text>

            <View>
                
            </View>
        </View>
    )
}
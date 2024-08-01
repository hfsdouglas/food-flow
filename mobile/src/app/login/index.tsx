import { Input } from "@/components/input";
import { Image, Text, View, StatusBar } from "react-native";

export default function Login() {
    return (
        <View className="flex-1 items-center justify-center gap-4 p-12">

            {/* <Image source={require('@/assets/logotype.png')} alt="Logotipo" /> */}
            <Text className="text-center font-bold text-emerald-400 text-xl">Digite seus dados para iniciar:</Text>

            <View className="w-full flex-column gap-2">
                <Input>
                    <Input.Field
                        placeholder="E-mail"
                        inputMode="email"
                    />
                </Input>

                <Input>
                    <Input.Field
                        placeholder="Senha"
                        secureTextEntry={true}
                    />
                </Input>
            </View>
        </View>
    )
}
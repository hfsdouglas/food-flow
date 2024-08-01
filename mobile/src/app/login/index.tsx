import { Input } from "@/components/input";
import { Link } from "expo-router";
import { Image, Text, View, StatusBar } from "react-native";

export default function Login() {
    return (
        <View className="flex-1 items-center justify-center gap-6 p-12">

            <Image source={require('@/assets/logotype.png')} alt="Logotipo" />
            <Text className="text-center font-bold text-indigo-200 text-xl mb-2">Digite seus dados {"\n"}para iniciar:</Text>

            <View className="w-full">
                <Input>
                    <Input.Field
                        placeholder="email@email.com.br"
                        inputMode="email"
                    />
                </Input>

                <Input variant="secondary">
                    <Input.Field
                        placeholder="senha"
                        secureTextEntry={true}
                    />
                </Input>

                <Link href={"#"} className="ml-2 mb-4">
                    <Text className="text-indigo-200 underline">Esqueci minha senha</Text>
                </Link>
                
                
                
                <Link href={"#"} className="text-center">
                    <Text className=" text-indigo-200 underline">Criar minha conta</Text>
                </Link>
            </View>
        </View>
    )
}
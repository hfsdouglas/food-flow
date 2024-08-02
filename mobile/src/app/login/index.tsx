import { Link } from "expo-router";
import { Image, KeyboardAvoidingView, Platform, Text, View } from "react-native";

import { Input } from "@/components/input";
import { Button } from "@/components/button";

export default function Login() {
    return (
        <KeyboardAvoidingView 
            className="flex-1 flex-row items-center justify-center p-12" 
            behavior={Platform.OS === 'ios' ? 'padding' : 'position'} 
            enabled
        >
            <View className="flex-column gap-6">
                <Image source={require('@/assets/logotype.png')} alt="Logotipo" />
                <Text className="text-center font-bold text-indigo-200 text-xl mb-2">Digite seus dados {"\n"}para iniciar</Text>

                <View className="w-full">
                    <Input>
                        <Input.Field
                            placeholder="email@email.com.br"
                            inputMode="email"
                        />
                    </Input>

                    <Input>
                        <Input.Field
                            placeholder="senha"
                            secureTextEntry={true}
                        />
                    </Input>

                    <Link href={"/"} className="ml-2 mb-4">
                        <Text className="text-indigo-200 font-regular underline text-md">Esqueci minha senha</Text>
                    </Link>
                    
                    <Button>
                        <Button.Title>ENTRAR</Button.Title>
                    </Button>
                    
                    <Link href={"/"} className="text-center">
                        <Text className=" text-indigo-200 font-regular underline text-md">Criar minha conta</Text>
                    </Link>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}
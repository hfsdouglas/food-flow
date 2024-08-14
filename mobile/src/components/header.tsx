import { Pressable, Text, View } from "react-native";
import { Href, router } from "expo-router";

import { ArrowLeft } from "lucide-react-native";

import { colors } from "@/styles/colors";
import { heightDefaultHeader, paddingTop } from "@/styles/sizes";

interface HeaderProps {
    title: string, 
    route?: Href,
}

export default function Header({title, route}: HeaderProps) {
    function handleBackButtonClick() {
        if (!route) {
            return router.back()
        }

        return router.replace(route)
    }

    return (
        <View className={`${heightDefaultHeader} ${paddingTop} bg-slate-500/15 p-4`}>
            <View className="flex-1 flex-row items-center">
                <Pressable onPress={handleBackButtonClick}>
                    <ArrowLeft color={colors.slate[400]} size={26} />
                </Pressable>

                <View className="flex-1 flex-row items-center justify-center">
                    <Text className="text-slate-400 font-bold text-lg -left-3">{title}</Text>
                </View>
            </View>
        </View>
    )
}
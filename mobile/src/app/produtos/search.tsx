import { Input } from "@/components/input";
import { colors } from "@/styles/colors";
import { Platform, Text, TextInput, View } from "react-native";

export default function Search() {
    return (
        <View className="pt-9 px-3 pb-3 bg-slate-500/15 flex-row">
            <View className="relative w-full border-b-2 border-slate-400" />
            <TextInput 
                className="absolute"
                placeholderTextColor={colors.slate['400']}
                cursorColor={colors.slate['400']}
                selectionColor={ Platform.OS === 'ios' ? colors.slate['400'] : undefined }
                placeholder="DIGITE O NOME DE ALGUM PRODUTO"
            />
        </View>
    )
}
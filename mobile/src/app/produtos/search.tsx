import { colors } from "@/styles/colors";
import { Search as SearchButton, X} from "lucide-react-native";
import { Platform, Pressable, TextInput, View } from "react-native";

const height = Platform.OS === 'ios' ? 'h-32' : 'h-24'

export default function Search() {
    return (
        <View className={`${height} bg-slate-500/15 p-4 justify-end`}>
            <View className="flex-1 flex-row gap-3">    
                <View className="relative flex-1 border-b-2 border-slate-400">
                    <TextInput 
                        className="absolute bottom-2 text-slate-400 font-bold text-md"
                        placeholderTextColor={colors.slate['500']}
                        cursorColor={colors.slate['400']}
                        selectionColor={ Platform.OS === 'ios' ? colors.slate['400'] : undefined }
                        placeholder="DIGITE O NOME DE ALGUM PRODUTO"
                    />
                </View>

                <View className="flex-row gap-3 items-end pb-3">
                    <Pressable>
                        <SearchButton color={colors.slate['400']} size={26} />
                    </Pressable>
                    
                    <Pressable>
                        <X color={colors.slate['400']} size={26} />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

/*



*/
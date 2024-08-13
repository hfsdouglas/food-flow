import { useState } from "react";
import { Text, TouchableOpacity, View, Platform, Pressable, TextInput, FlatList } from "react-native";
import { Search, X } from "lucide-react-native";

import { colors } from "@/styles/colors";
import { height } from "@/styles/sizes";

import { Button } from "@/components/button";

const data = [
    { title: "BROWNIE" },
    { title: "COOKIES" },
    { title: "BEBIDAS" },
    { title: "PÃES" },
    { title: "DONUTS" },
    { title: "DOCES" },
]

export enum SearchBarHeader {
    "OPENED" = 1,
    "CLOSED" = 2,
}

export default function Produtos() {
    const [searchActivity, setSearchActivity] = useState(SearchBarHeader.CLOSED);

    function handleSeachPressable() {
        searchActivity === SearchBarHeader.CLOSED ? setSearchActivity(SearchBarHeader.OPENED) : setSearchActivity(SearchBarHeader.CLOSED)
    }

    return (
        <>
            {(searchActivity === 1 
                ? 
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
                                    <Search color={colors.slate['400']} size={26} />
                                </Pressable>
                                
                                <Pressable onPress={handleSeachPressable}>
                                    <X color={colors.slate['400']} size={26} />
                                </Pressable>
                            </View>
                        </View>
                    </View> 
                : 
                    <View className="h-56 bg-slate-500/15 p-5 gap-4">
                        <View className="flex-row gap-4 mt-4">
                            <View className="w-[102px] bg-red-500 border rounded-lg"></View>

                            <View className="flex-1 justify-between gap-1">
                                <Text className="font-bold text-xl text-slate-400">Sua Padaria</Text>
                                <Text className="font-regular text-sm text-slate-400/80">
                                    Acesse o cardápio da semana e faça seu pedido. Tudo feito com a nossa melhor energia e intenção!
                                </Text>
                                <Text className="font-bold text-sm text-slate-400/80">
                                    Fechado (Segunda-Feira, 07h00 às 18h00)
                                </Text>
                            </View>
                        </View>

                        <View className="flex-1 flex-row gap-4">
                            <Pressable onPress={handleSeachPressable}>
                                <Search color={colors.slate['400']} size={26} />
                            </Pressable>

                            <View className="w-1 bg-slate-400"/>

                            <FlatList 
                                data={data} 
                                horizontal
                                showsHorizontalScrollIndicator={false} 
                                renderItem={({item}) => 
                                    <Button className="h-[28px] mx-1" variant="secondary">
                                        <Button.Title className="text-sm">{item.title}</Button.Title>
                                    </Button>
                            }/>
                        </View>
                    </View>
            )}
            
            <View className="p-5">
                <View>
                    <Text className="font-bold text-slate-400">BROWNIE</Text>
                    
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
                </View>
            </View>
        </>
    )
}
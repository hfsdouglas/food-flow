import { useRef, useState } from "react"
import { FlatList, Platform, Pressable, TextInput, TouchableOpacity, View, SectionList, Text } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { SEARCH_MODE, useSearchMode } from "@/hooks/use-seach-mode"

import { ProductsProps } from "@/screens/products"

import { Search, X } from "lucide-react-native"

import { colors } from "@/styles/colors"

import { MENU } from "@/utils/products"
import { CATEGORIES } from "@/utils/categories"

import { Button } from "./button"
import { Product, ProductCard } from "./product-card"


export function ProductBody({ navigation }: ProductsProps) {
    const insets = useSafeAreaInsets()
    const headerPaddingTop = insets.top >= 47 ? 'pt-12' : 'pt-14'
    const heightCard = Platform.OS === "ios" ? 'h-[235px]' : 'h-64'

    const [category, setCategory] = useState(CATEGORIES[0].title)
    const sectionListRef = useRef<SectionList<Product>>(null)

    const { onSearchMode, toggleSearchButtonPress } = useSearchMode()

    function handleCategorySelect(selectedCategory: string) {
        setCategory(selectedCategory);

        const sectionIndex = CATEGORIES.findIndex(({ title }) => title === selectedCategory)

        if (sectionListRef.current) {
            sectionListRef.current.scrollToLocation({
                animated: true,
                sectionIndex, 
                itemIndex: 0
            })
        }
    }

    return (
        <View className='flex-1'>
            { onSearchMode === SEARCH_MODE.TYPE ? (
                <View className={`${headerPaddingTop} h-32 bg-slate-500/15 p-4 justify-end`}>
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
                            <TouchableOpacity className='h-8 w-8'>
                                <Search color={colors.slate['400']} size={26} />
                            </TouchableOpacity>
                            
                            <TouchableOpacity className='h-8 w-8' onPress={toggleSearchButtonPress}>
                                <X color={colors.slate['400']} size={26} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            ) : (
                <View className={`${headerPaddingTop} ${heightCard} bg-slate-900 px-5 pb-5 gap-4`}>
                    <View className="flex-row gap-4 mt-4">
                        <View className="w-[102px] h-[102px] bg-red-500 border rounded-lg"></View>

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

                    <View className="flex-1 flex-row gap-3 items-center">
                        <TouchableOpacity className='h-8 w-8' onPress={toggleSearchButtonPress}>
                            <Search color={colors.slate['400']} size={26} />
                        </TouchableOpacity>

                        <Text className='text-slate-400 text-4xl leading-none'>|</Text>

                        <FlatList 
                            data={CATEGORIES} 
                            horizontal
                            showsHorizontalScrollIndicator={false} 
                            renderItem={({ item }) => (
                                <Button className="h-[28px] mx-1" variant="secondary" isSelected={category === item.title} onPress={() => handleCategorySelect(item.title)}>
                                    <Button.Title className="text-sm">{item.title}</Button.Title>
                                </Button>
                            )}
                        />
                    </View>
                </View>
            )}
            
            <SectionList
                ref={sectionListRef} 
                sections={MENU} 
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ProductCard onPress={() => navigation.navigate('Detalhes')} product={item}/> 
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text className="text-xl text-slate-400 font-bold mt-5">{title}</Text>
                )}
                className="flex-1 p-5"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
                stickySectionHeadersEnabled={false}
            />
        </View>
    )
}

// ${heightSearchBar}
import { Platform } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Profile from "@/screens/profile"
import Store from "@/screens/store"
import Orders from "@/screens/orders"

import { CircleUserRound, Pizza, ScrollText, ShoppingBag, Store as StoreIcon } from "lucide-react-native"

import { StackProductRoutes, StackBagRoutes } from "./stack.routes"
import { useSafeAreaInsets } from "react-native-safe-area-context"

const Tab = createBottomTabNavigator()

export default function TabRoutes() {
    const insets = useSafeAreaInsets()
    const TabHeightPlatforms = Platform.OS === 'android' ? 70 : 95
    const TabPaddingBottomPlatforms = Platform.OS === 'ios' ? insets.bottom : 12
    const TabPaddingTopPlatforms = Platform.OS === 'ios' ? 8 : 12

    return (
        <Tab.Navigator screenOptions={{ 
            headerShown: false, 
            tabBarStyle: { 
                borderTopColor: 'transparent', 
                height: TabHeightPlatforms, 
                paddingBottom: TabPaddingBottomPlatforms, 
                paddingTop: TabPaddingTopPlatforms
            } 
        }}>
            <Tab.Screen 
                name="Store" 
                component={Store}
                options={{
                    title: 'Loja',
                    tabBarIcon: ({ color, size }) => <StoreIcon color={color} size={size} />,
                }} 
            />
            
            <Tab.Screen 
                name="StackProductRoutes" 
                component={StackProductRoutes}
                options={{
                    title: 'Produtos',
                    tabBarIcon: ({ color, size }) => <Pizza color={color} size={size} />,
                }} 
            />

            <Tab.Screen 
                name="StackBagRoutes" 
                component={StackBagRoutes}
                options={{
                    title: 'Sacola',
                    tabBarIcon: ({ color, size }) => <ShoppingBag color={color} size={size} />,
                }} 
            />

            <Tab.Screen 
                name="Orders" 
                component={Orders}
                options={{
                    title: 'Pedidos',
                    tabBarIcon: ({ color, size }) => <ScrollText color={color} size={size} />,
                }} 
            />

            <Tab.Screen 
                name="Profile"  
                component={Profile} 
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ color, size }) => <CircleUserRound color={color} size={size} />,
                }}
            />
        </Tab.Navigator>
    )
}
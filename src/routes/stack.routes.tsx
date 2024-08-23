import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Products from "@/screens/products"
import ProductDetails from "@/screens/product-details"
import Shipping from "@/screens/shipping"
import Payment from "@/screens/payment"
import Bag from "@/screens/bag"

export const Stack = createNativeStackNavigator()

export function StackProductRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen 
                    name="Produtos" 
                    component={Products}
                    options={{
                        headerShown: false
                    }} 
                />

                <Stack.Screen 
                    name="Detalhes" 
                    component={ProductDetails} 
                />
            </Stack.Group>
        </Stack.Navigator>
    )
}

export function StackBagRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen 
                    name="Sacola" 
                    component={Bag}
                    options={{
                        headerShown: false
                    }} 
                />

                <Stack.Screen 
                    name="Entrega" 
                    component={Shipping} 
                />
                
                <Stack.Screen 
                    name="Pagamento" 
                    component={Payment} 
                />
            </Stack.Group>
        </Stack.Navigator>
    )
}
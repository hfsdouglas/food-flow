import "./../styles/global.css"

import { StatusBar } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaProvider } from "react-native-safe-area-context"

import { DarkTheme } from "@/themes/dark-theme"

import TabRoutes from "./tab.routes"

import {
    useFonts,
    Poppins_100Thin,
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_400Regular_Italic,
  } from "@expo-google-fonts/poppins";
  
import { Loading } from "@/components/loading";

export default function Routes() {
    const [fontsLoaded] = useFonts({
        Poppins_100Thin,
        Poppins_400Regular,
        Poppins_700Bold,
        Poppins_400Regular_Italic,
    });

    if (!fontsLoaded) {
        return <Loading />
    }

    return (
        <SafeAreaProvider>
            <NavigationContainer theme={DarkTheme} >
                <StatusBar barStyle="light-content" backgroundColor="transparent" translucent /> 
                <TabRoutes />
            </NavigationContainer>
        </SafeAreaProvider>
    )
}
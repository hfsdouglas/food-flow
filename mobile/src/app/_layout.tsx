import "@/styles/global.css";

import { StatusBar, View } from "react-native";
import { Slot } from "expo-router";

import {
  useFonts,
  Poppins_100Thin,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_400Regular_Italic,
} from "@expo-google-fonts/poppins";

import { Loading } from "@/components/loading";

export default function layout() {
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
    <View className="flex-1 font-regular bg-slate-950">
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Slot />
    </View>
  )
}
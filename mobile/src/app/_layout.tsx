import "@/styles/global.css"

import { StatusBar, View } from "react-native"
import { Slot } from "expo-router"

import { 
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_400Regular_Italic, 
} from "@expo-google-fonts/roboto"

import { Loading } from "@/components/loading";

export default function layout() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <View className="flex-1 bg-teal-900">
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Slot />
    </View>
  )
}
import { View } from "react-native";
import { Slot } from "expo-router";

import { NavBar } from "@/components/navbar";

export default function layout() {
    return (
        <View className="flex-1 relative">
            <Slot />
            <NavBar />
        </View>
    )
}
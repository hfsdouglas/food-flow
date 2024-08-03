import { createContext, useContext } from "react";
import { Text, TextProps, TouchableOpacity, TouchableOpacityProps } from "react-native";
import clsx from "clsx";

import { Loading } from "./loading";

type Variants = "primary" | "secondary"

type ButtonProps = TouchableOpacityProps & {
    variant?: Variants,
    isLoading?: boolean
}

const ThemeContext = createContext<{ variant?: Variants }>({})

function Button ({children, variant, className, isLoading, ...rest}: ButtonProps) {
    return (
        <TouchableOpacity
            className={
                clsx(
                    "h-16 flex-row items-center px-5 bg-slate-400 rounded-xl shadow mb-4",
                    className
                )
            }
            activeOpacity={0.8}
            {...rest}
        >
            <ThemeContext.Provider value={{ variant }}>
                { isLoading ? <Loading /> :  children }
            </ThemeContext.Provider>
        </TouchableOpacity>
    )
}

function Title ({ children, className }: TextProps) {
    const { variant } = useContext(ThemeContext)

    return (
        <Text className={
                clsx(
                    "flex-1 text-slate-950 font-bold text-lg",
                    className
                )
            }
        >
            { children }
        </Text>
    )
}

Button.Title = Title

export { Button }
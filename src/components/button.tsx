import { createContext, useContext } from "react";
import { Text, TextProps, TouchableOpacity, TouchableOpacityProps } from "react-native";
import clsx from "clsx";

import { Loading } from "./loading";
import { colors } from "@/styles/colors";

type Variants = "primary" | "secondary"

type ButtonProps = TouchableOpacityProps & {
    variant?: Variants,
    isLoading?: boolean,
}

const ThemeContext = createContext<{ variant?: Variants }>({})

function Button ({children, variant, className, isLoading, ...rest}: ButtonProps) {
    return (
        <TouchableOpacity
            className={
                clsx(
                    "h-16 px-5 bg-slate-400 rounded-xl shadow mb-4 justify-center",
                    {"border border-slate-400 bg-transparent": variant === "secondary"},
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
                    "text-slate-950 font-bold text-lg",
                    {"text-slate-400": variant === "secondary"},
                    className
                )
            }
            style={{ color: variant === "secondary" ? colors.slate['400'] : colors.slate['950'] }}
        >
            { children }
        </Text>
    )
}

Button.Title = Title

export { Button }
import { ReactNode, useContext, createContext } from "react"
import { Platform, TextInput, TextInputProps, View, ViewProps } from "react-native"
import clsx from "clsx"
import { colors } from "@/styles/colors"

type Variants = "primary" | "secondary" | "tertiary"

type InputProps = ViewProps & {
    children: ReactNode,
    variant?: Variants
}

const ThemeContext = createContext<{ variant?: Variants }>({})

function Input ({ children, variant = "primary", className, ...rest }: InputProps ) {
    return (
        <View
            className={
                clsx(
                    "mb-4 relative -z-10 h-16",
                    {"border border-slate-950 bg-slate-400": variant === "secondary"},
                    className 
                )}
            {...rest}
        >
            <ThemeContext.Provider value={{ variant }}>
                
                { children }
            </ThemeContext.Provider>
        </View>
    )
}

function Field ({ ...rest }: TextInputProps) {
    const { variant } = useContext(ThemeContext)

    return (
        <>
            <View className="absolute w-full z-10 h-16 rounded-xl bg-slate-500 shadow shadow-slate-500/10 opacity-15" />
            <TextInput 
                className={
                    clsx(
                        "flex-1 z-20 px-5 text-slate-300 text-lg font-regular",
                        {"text-indigo-950": variant === "secondary"}
                    )
                }
                placeholderTextColor={ variant === "primary" ? colors.slate['500'] : colors.slate['950']}
                cursorColor={colors.slate['400']}
                selectionColor={ Platform.OS === 'ios' ? colors.slate['500'] : undefined }
                {...rest}
            />
        </>
    )
}

Input.Field = Field

export { Input }
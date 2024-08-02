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
                    "mb-4 bg-indigo-900 shadow h-16 px-5 rounded-xl",
                    {"border border-indigo-950 bg-indigo-200": variant === "secondary"},
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
        <TextInput 
            className={
                clsx(
                    "flex-1 text-indigo-200 text-lg font-regular",
                    {"text-indigo-950": variant === "secondary"}
                )
            }
            placeholderTextColor={ variant === "primary" ? colors.indigo['400'] : colors.indigo['700']}
            cursorColor={colors.lime['400']}
            selectionColor={ Platform.OS === 'ios' ? colors.lime['400'] : undefined }
            {...rest}
        />
    )
}

Input.Field = Field

export { Input }
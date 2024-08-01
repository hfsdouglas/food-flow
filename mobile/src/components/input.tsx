import { ReactNode } from "react"
import { Platform, TextInput, TextInputProps, View, ViewProps } from "react-native"
import clsx from "clsx"
import { colors } from "@/styles/colors"

type Variants = "primary" | "secondary" | "tertiary"

type InputProps = ViewProps & {
    children: ReactNode,
    variant?: Variants
}

function Input ({ children, variant = "primary", className, ...rest }: InputProps ) {
    return (
        <View
            className={
                clsx(
                    "bg-indigo-950 shadow-lg shadow-emerald-400 h-16 px-4 flex-row rounded-lg border border-emerald-400",
                    {"shadow-zinc-100 border-zinc-100": variant === "secondary"},
                    className 
                )}
            {...rest}
        >
            { children }
        </View>
    )
}

function Field ({ ...rest }: TextInputProps) {
    return (
        <TextInput 
            className="flex-1 text-emerald-400 text-lg font-regular mb-1"
            placeholderTextColor={colors.emerald['400']}
            cursorColor={colors.zinc['100']}
            selectionColor={ Platform.OS === 'ios' ? colors.zinc['100'] : undefined }
            {...rest}
        />
    )
}

Input.Field = Field

export { Input }
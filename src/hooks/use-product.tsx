import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

type ProductProviderProps = {
    children: ReactNode
}

type Extra = [{
    title: string,
    price: number,
    quantity: number
}]

type Product = {
    title: string,
    setTitle: Dispatch<SetStateAction<string>>, 
    description: string,
    setDescription: Dispatch<SetStateAction<string>>,
    price: number,
    setPrice: Dispatch<SetStateAction<number>>,
    quantity: number,
    setQuantity: Dispatch<SetStateAction<number>>,
    extras: Extra,
    setExtras: Dispatch<SetStateAction<Extra>>,
    total: number,
    setTotal: Dispatch<SetStateAction<number>>
}

const ProductContext = createContext<Product | undefined>(undefined);

export function ProductProvider({ children }: ProductProviderProps) {
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [extras, setExtras] = useState<Extra>([{ title: '', price: 0, quantity: 0 }])
    const [price, setPrice] = useState<number>(0)
    const [quantity, setQuantity] = useState<number>(1)
    const [total, setTotal] = useState<number>(0)

    useEffect(() => {
        handleTotal()
    }, [quantity, extras])

    function handleTotal() {
        let extraTotal = 0

        for (const extra of extras) {
            extraTotal += extra.price * extra.quantity
        }

        setTotal((price * quantity) + extraTotal)
    }

    return (
        <ProductContext.Provider value={{
            title, setTitle,
            description, setDescription,
            extras, setExtras,
            price, setPrice,
            quantity, setQuantity,
            total, setTotal 
        }}>
            { children }
        </ProductContext.Provider>
    )
}

export function useProduct() {
    const context = useContext(ProductContext)

    if (!context) {
        throw new Error("useProduct must be used within a ProductProvider")
    }

    const { title, setTitle, description, setDescription, extras, setExtras, price, setPrice, quantity, setQuantity, total } = context as Product

    return {}
}
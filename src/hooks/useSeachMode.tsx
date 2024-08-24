import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react"

type SearchModeProviderProps = {
    children: ReactNode
}

type SearchMode = {
    onSearchMode: number,
    setOnSearchMode: Dispatch<SetStateAction<number>>
}

export enum SEARCH_MODE {
    BUTTON = 1,
    TYPE = 2
}

const SearchModeContext = createContext<SearchMode | undefined>(undefined)

export function SearchModeProvider({ children }: SearchModeProviderProps) {
    const [onSearchMode, setOnSearchMode] = useState<number>(SEARCH_MODE.BUTTON)

    return (
        <SearchModeContext.Provider value={{ onSearchMode, setOnSearchMode }}>
            { children }
        </SearchModeContext.Provider>
    )
}

export function useSearchMode() {
    const context = useContext(SearchModeContext)

    if (!context) {
        throw new Error("useSearchMode must be used within a SearchModeProvider")
    }

    const { onSearchMode, setOnSearchMode } = context as SearchMode

    function toggleSearchButtonPress() {
        const value = onSearchMode === SEARCH_MODE.TYPE ? SEARCH_MODE.BUTTON : SEARCH_MODE.TYPE
        
        setOnSearchMode(value)
    }
    
    return { onSearchMode, toggleSearchButtonPress }
}
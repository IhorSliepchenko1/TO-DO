export enum LanguageList { RU = `RU`, EN = `EN` }
export enum ThemeList { dark = `dark`, light = `light` }

export type T = { [key: string]: string; }

export type StoreContextType = {
     language: LanguageList
     languageToggle: () => void
     translations: T;
     error: boolean
     theme: ThemeList
     toggleTheme: () => void
}

export type LoadTranlation = {
     language: LanguageList,
     setTranslations: React.Dispatch<React.SetStateAction<T>>
     setError: React.Dispatch<React.SetStateAction<boolean>>
}
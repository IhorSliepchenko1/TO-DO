import { useContext, createContext, useState, useEffect } from 'react';
import { LanguageList, LoadTranlation, StoreContextType, T, ThemeList } from './contextProviderTypes';

const StoreContext = createContext<StoreContextType>({
     language: LanguageList.RU,
     languageToggle: () => { },
     translations: {},
     error: false,
     theme: ThemeList.light,
     toggleTheme: () => { }
})

const loadTranslations = async ({ language, setTranslations, setError }: LoadTranlation) => {
     try {
          const module: T = await import(`../locales/${language}.json`)
          setTranslations(module)
          setError(false)
     }

     catch (error) {
          setError(true)
          console.error(error)
     }
};

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
     const [language, setLanguage] = useState<LanguageList>(() => {
          return (localStorage.getItem(`language`) as LanguageList.RU | LanguageList.EN) || "RU";
     });
     const [translations, setTranslations] = useState<T>({});
     const [error, setError] = useState<boolean>(false)

     const [theme, setTheme] = useState<ThemeList>(() => {
          return (localStorage.getItem(`theme`) as ThemeList.dark | ThemeList.light) || "light";
     });

     const languageToggle = () => {
          const newLanguageValue = language === LanguageList.RU ? LanguageList.EN : LanguageList.RU;
          setLanguage(newLanguageValue);
     };

     const saveLanguageToLocalStorage = (language: LanguageList) => {
          localStorage.setItem(`language`, language);
     };

     const toggleTheme = () => {
          const newTheme = theme === ThemeList.dark ? ThemeList.light : ThemeList.dark;
          setTheme(newTheme)
     }

     const saveThemeToLocalStorage = (theme: ThemeList) => {
          localStorage.setItem(`theme`, theme);
     };


     useEffect(() => {
          if (language) {
               loadTranslations({ language, setTranslations, setError });
               saveLanguageToLocalStorage(language)
          }

     }, [language]);

     useEffect(() => {
          saveThemeToLocalStorage(theme)
          document.documentElement.setAttribute("data-theme", theme);
     }, [theme])


     return (
          <StoreContext.Provider value={{
               language, languageToggle, translations, error, toggleTheme, theme
          }}>
               {children}
          </StoreContext.Provider>
     )
}

export const useStoreContext = () => useContext(StoreContext)
export default ContextProvider

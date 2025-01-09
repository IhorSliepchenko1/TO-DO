import { useContext, createContext, useState, useEffect } from 'react';
import { LanguageList, LoadTranlation, StoreContextType, T } from './contextProviderTypes';
import { Children } from '../types';

const StoreContext = createContext<StoreContextType>({
     language: LanguageList.RU,
     languageToggle: () => { },
     translations: {},
     error: false
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

const ContextProvider = ({ children }: Children) => {
     const [language, setLanguage] = useState<LanguageList>(() => {
          return (localStorage.getItem(`language`) as LanguageList.RU | LanguageList.EN) || "RU";
     });

     const [translations, setTranslations] = useState<T>({});

     const [error, setError] = useState<boolean>(false)

     const languageToggle = () => {
          const newLanguageValue = language === LanguageList.RU ? LanguageList.EN : LanguageList.RU;
          setLanguage(newLanguageValue);
     };

     const saveLanguageToLocalStorage = (language: LanguageList) => {
          localStorage.setItem(`language`, language);
     };


     useEffect(() => {
          if (language) {
               loadTranslations({ language, setTranslations, setError });
               saveLanguageToLocalStorage(language)
          }

     }, [language]);


     return (
          <StoreContext.Provider value={{ language, languageToggle, translations, error }}>
               {children}
          </StoreContext.Provider>
     )
}

export default ContextProvider
export const useStoreContext = () => useContext(StoreContext)

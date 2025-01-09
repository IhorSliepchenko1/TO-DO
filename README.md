# gradient generator

[text](https://cssgradient.io/)

# shadow generator

[text](https://www.cssmatic.com/box-shadow)

# font taken from

[text](https://fontstorage.com/)

# toggle theme

[text](https://uiverse.io/alexruix/splendid-liger-23)

# border-radius generator

[text](https://border-radius.com/)

# useContext
1. Инициализация состояния контекста 
const StoreContext = createContext<ТИП>(НАЧАЛЬНЫЕ СОСТОЯНИЯ)

2. Описание провайдера
const ContextProvider = ({ children }: Props) => {
     ОПИСАНИЕ ЛОГИКИ ИЗМЕНЕНИЯ СОСТОЯНИЙ ЗНАЧЕНИЙ

     return (
          <StoreContext.Provider value={{ ЗНАЧЕНИЯ }}>
               {children}
          </StoreContext.Provider>
     )
}

export default ContextProvider

3. хук
export const useStoreContext = () => useContext(StoreContext)
 по желанию для уменьшения копи-пасты можно прописать хук, что бы в проекте юзать 
 здесь будет 1 импорт нашего хука
 const { значения } = useStoreContext()

 вместо 
 здесь будет 22 импорта, контекст и хуй от реакта 
 const { значения } = useContext(StoreContext)

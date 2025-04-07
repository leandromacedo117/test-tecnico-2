import React from 'react'
import { dataUser } from '../types/dataUser'

type UiContextType = {
    dataUser: dataUser | null
    error: string | null
    loading: boolean
    setDataUser: React.Dispatch<React.SetStateAction<dataUser | null>>
    setError: React.Dispatch<React.SetStateAction<string | null>>
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const Uicontext = React.createContext<UiContextType>({
    dataUser: null,
    error: null,
    loading: false,
    setDataUser: () => { },
    setError: () => { },
    setLoading: () => { },
})




export const useUi = () => {
    const context = React.useContext(Uicontext)
    if (!context) {
        throw new Error('useUi deve ser usado dentro de UicontextProvider')
    }
    return context
}


export const UicontextProvider = ({ children }: React.PropsWithChildren) => {
    const [dataUser, setDataUser] = React.useState<dataUser | null>(null)
    const [error, setError] = React.useState<string | null>(null)
    const [loading, setLoading] = React.useState(false)

    return (
        <Uicontext.Provider value={{
            dataUser,
            error,
            loading,
            setDataUser,
            setError,
            setLoading
        }}>
            {children}
        </Uicontext.Provider>
    )
}


// contexts/GlobalFeedback.tsx


// const FeedbackContext = createContext<FeedbackContextType>({} as FeedbackContextType);

// export const FeedbackProvider = ({ children }: { children: ReactNode }) => {



//     return (
//         <FeedbackContext.Provider value={{ loading, error, showLoading, showError }}>
//             {children}
//             {error && <ErrorToast message={error} />}
//             {loading && <GlobalSpinner />}
//         </FeedbackContext.Provider>
//     );
// };
import { createContext, ReactNode, useCallback, useContext, useState, useMemo, useEffect } from 'react'
import AuthFireBase from '@/services/firebase/auth'

interface AuthContextDataProps {
    userId: string | null,
    status: 'checking' | 'authenticated' | 'no-authenticated'
    signInWithGoogle: () => Promise<void>
    signInWithCredentials: (password: string, email: string) => Promise<void>,
    signUpWithCredentials: (username: string, password: string) => Promise<void>
    logout: () => Promise<void>
}


const initialState: Pick<AuthContextDataProps, 'status' | 'userId'> = {
    status: 'checking',
    userId: null
}

const AuthContext = createContext({} as AuthContextDataProps)

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [session, setSession] = useState(initialState)

    useEffect(() => {
        AuthFireBase.authStateHasChanged(setSession)
    }, [])

    console.log({ session })

    const logout = useCallback(async () => {
        await AuthFireBase.logout()
        setSession({ userId: null, status: 'no-authenticated' })
    }, [])

    const validateAuth = useCallback((userId: string | undefined) => {
        if (userId) return setSession({ userId, status: 'authenticated' })
        logout()
    }, [])

    const signInWithGoogle = useCallback(async () => {
        setSession(prev => ({...prev, status: 'checking' }))
        const userId = await AuthFireBase.signInWithGoogle()
        validateAuth(userId);
    }, [])

    const signInWithCredentials = useCallback(async (password: string, email: string) => {
        setSession(prev => ({...prev, status: 'checking' }))
        const userId = await AuthFireBase.loginWithCredentials({ email, password })
        validateAuth(userId);
    }, [])

    const signUpWithCredentials = useCallback(async (email: string, password: string) => {
        setSession(prev => ({ ...prev, status: 'checking' }))
        const userId = await AuthFireBase.singnUpWithCredentials({ email, password })
        validateAuth(userId);
    }, [])

    const contextValue = useMemo(() => ({
        ...session,
        signInWithGoogle,
        signInWithCredentials,
        signUpWithCredentials,
        logout
    }), [session])

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(): AuthContextDataProps {
  const context = useContext(AuthContext)

  return context
}

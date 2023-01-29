import { createContext, ReactNode, useCallback, useContext, useState, useMemo } from 'react'
import jwtDecode from 'jwt-decode'
import Auth from '@/services/auth'

interface UserProps {
  email: string,
  name: string
}

interface AuthContextDataProps {
  user: UserProps,
  singIn: (username: string, password: string) => void,
  isAuthenticated: boolean
  singUp: (username: string, password: string, name: string) => Promise<boolean | null>
}

const AuthContext = createContext({} as AuthContextDataProps)

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [user, setUser] = useState<UserProps>({} as UserProps)

  const singIn = useCallback(async (username: string, password: string) => {
    const resp = await Auth.authenticated(username, password)

    if (!resp?.access_token) return

    const user = jwtDecode(resp.access_token) as { name: string, email: string }

    if (user) {
      setUser(user)
      setIsAuthenticated(true)
    }

  }, [])

  const singUp = useCallback(async (username: string, password: string, name: string): Promise<boolean | null> => {
    const resp = await Auth.create(username, password, name)

    if (resp?.created) return true

    return null
  }, [])

  const context = useMemo(() => ({ singIn, singUp, user, isAuthenticated }), [user, isAuthenticated])

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextDataProps {
  const context = useContext(AuthContext)

  return context
}

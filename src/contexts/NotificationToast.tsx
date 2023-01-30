import { useCallback, useEffect, useState, createContext, ReactNode, useMemo, useContext } from 'react'
import Toast, { ToastProps } from '@/common/components/NotificationToast'
import { createId } from '@paralleldrive/cuid2';

interface NotificationToastProps {
  addToast: (toast: ToastProps) => void,
}

const NotificationToastContext = createContext({} as NotificationToastProps)

export const NotificationToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => setToasts(toast => toast.slice(1)), 4000)

      return () => clearTimeout(timer)
    }
  }, [toasts])

  const addToast = useCallback((toast: ToastProps) => {
    const item = {
      ...toast,
      id: createId()
    }
    setToasts(toasts => [...toasts, item])
  }, [])

  const context = useMemo(() => ({ addToast }), [])

  return (
    <NotificationToastContext.Provider value={context}>
      {children}
      {toasts?.map(toast => <Toast {...toast} />)}
    </NotificationToastContext.Provider>
  )
}

export function useNotification(): NotificationToastProps {
  const context = useContext(NotificationToastContext)

  return context
}

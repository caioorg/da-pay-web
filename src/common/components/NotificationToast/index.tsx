import React from 'react';
import cx from 'classnames'

export interface ToastProps {
  id?: string
  type: 'success' | 'error' | 'warning' | 'info'
  message: string
}

const COLORS_BG = {
  'success': 'bg-green-500',
  'error': 'bg-red-500',
  'warning': 'bg-orange-400',
  'info': 'bg-blue-500',
}

const NotificationToast: React.FC<ToastProps> = ({ message, type, id }) => {
  const classes = cx(
    'absolute flex items-center w-full max-w-xs p-4 space-x-4 rounded-lg shadow right-5 bottom-5 text-white divide-x divide-gray-200',
    COLORS_BG[type]
  )

  return (
    <div key={id} className={classes} role="alert">
      <p className="text-sm font-normal">{message}</p>
    </div>
  )
}

export default NotificationToast;

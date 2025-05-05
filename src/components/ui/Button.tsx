import Link from 'next/link'
import { forwardRef } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  fullWidth?: boolean
  children: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', href, fullWidth = false, children, className = '', ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
    
    const variantClasses = {
      primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
      secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500',
      outline: 'bg-transparent border border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
      white: 'bg-white text-primary-600 hover:bg-gray-100 focus:ring-primary-500',
    }
    
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-5 py-2.5 text-base',
      lg: 'px-8 py-3.5 text-lg',
    }
    
    const widthClass = fullWidth ? 'w-full' : ''
    
    const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`
    
    if (href) {
      return (
        <Link href={href} className={allClasses}>
          {children}
        </Link>
      )
    }
    
    return (
      <button ref={ref} className={allClasses} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
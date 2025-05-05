import Link from 'next/link'
import { HeartPulse } from 'lucide-react'

interface LogoProps {
  variant?: 'default' | 'white'
}

export function Logo({ variant = 'default' }: LogoProps) {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className={`flex items-center justify-center rounded-md text-white ${
        variant === 'white' ? 'bg-primary-500' : 'bg-primary-600'
      }`}>
        <HeartPulse size={24} className="m-1" />
      </div>
      <span className={`font-poppins font-bold text-xl ${
        variant === 'white' ? 'text-white' : 'text-primary-600 dark:text-white'
      }`}>
        SOCOMES
      </span>
    </Link>
  )
}
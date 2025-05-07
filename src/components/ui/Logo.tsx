import Link from 'next/link'
import { HeartPulse } from 'lucide-react'
import Image from 'next/image'

interface LogoProps {
  variant?: 'default' | 'white'
  linkDisabled?: boolean
}

export function Logo({ variant = 'default', linkDisabled = false }: LogoProps) {
  const content = (
    <div className="flex items-center space-x-2">
      <div className={`flex items-center justify-center rounded-md text-white`}>
        <Image 
          src="/logo/Sans titre-1.png"
          alt="Logo SOCOMES"
          width={40}
          height={40}
          className="h-12 w-12"
          priority
        />
      </div>
      <span className={`font-poppins font-bold text-xl ${
        variant === 'white' ? 'text-white' : 'text-primary-600 dark:text-white'
      }`}>
        SOCOMES
      </span>
    </div>
  )

  if (linkDisabled) {
    return content
  }

  return (
    <Link href="/">
      {content}
    </Link>
  )
}
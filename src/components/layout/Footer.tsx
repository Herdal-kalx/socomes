import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <Logo variant="white" />
            </div>
            <p className="text-gray-400 mb-6">
              La Société Congolaise de Médecine Sexuelle (SOCOMES) est dédiée à l'avancement 
              de la santé sexuelle en République Démocratique du Congo à travers l'éducation, 
              la recherche et les soins cliniques.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook size={20} />
              </Link>
              <Link href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter size={20} />
              </Link>
              <Link href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram size={20} />
              </Link>
              <Link href="https://youtube.com" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">YouTube</span>
                <Youtube size={20} />
              </Link>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              {[
                { label: 'Accueil', href: '/' },
                { label: 'À Propos', href: '/a-propos' },
                { label: 'Services', href: '/services' },
                { label: 'Articles', href: '/articles' },
                { label: 'Événements', href: '/evenements' },
                { label: 'Devenir Membre', href: '/adhesion' },
                { label: 'Contact', href: '/contact' },
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              {[
                { label: 'Consultations Médicales', href: '/consultations' },
                { label: 'Télémédecine', href: '/telemedecine' },
                { label: 'Formations Professionnelles', href: '/formations' },
                { label: 'Recherche Scientifique', href: '/recherche' },
                { label: 'Sensibilisation', href: '/sensibilisation' },
                { label: 'Conseils Psychologiques', href: '/conseil-psychologique' },
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Avenue de la Santé, Kinshasa, République Démocratique du Congo
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-primary-500 mr-3 flex-shrink-0" />
                <a href="tel:+243123456789" className="text-gray-400 hover:text-white transition-colors">
                  +243 123 456 789
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-primary-500 mr-3 flex-shrink-0" />
                <a href="mailto:contact@socomes.org" className="text-gray-400 hover:text-white transition-colors">
                  contact@socomes.org
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} SOCOMES. Tous droits réservés.
            </p>
            <ul className="flex flex-wrap justify-center space-x-4 text-sm text-gray-500">
              <li>
                <Link href="/mentions-legales" className="hover:text-white transition-colors">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link href="/politique-de-confidentialite" className="hover:text-white transition-colors">
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/conditions-utilisation" className="hover:text-white transition-colors">
                  Conditions d'Utilisation
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
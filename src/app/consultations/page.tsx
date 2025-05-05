'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import DatePicker from 'react-datepicker'
import { addDays, format, setHours, setMinutes } from 'date-fns'
import { fr } from 'date-fns/locale'
import 'react-datepicker/dist/react-datepicker.css'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  Users, 
  Video, 
  Phone, 
  MessageSquare,
  CheckCircle 
} from 'lucide-react'
import { Button } from '@/components/ui/Button'

const formSchema = z.object({
  fullName: z.string().min(3, { message: 'Le nom complet est requis (minimum 3 caractères)' }),
  email: z.string().email({ message: 'Adresse email invalide' }),
  phone: z.string().min(9, { message: 'Numéro de téléphone invalide' }),
  appointmentDate: z.date(),
  appointmentTime: z.date(),
  appointmentType: z.enum(['in-person', 'video', 'phone']),
  speciality: z.enum(['general', 'reproductive', 'therapy', 'education']),
  problem: z.string().min(10, { message: 'Veuillez décrire brièvement votre problème (minimum 10 caractères)' }),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: 'Vous devez accepter les termes et conditions' }),
  }),
})

type FormData = z.infer<typeof formSchema>

export default function ConsultationsPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const { 
    register, 
    handleSubmit, 
    control,
    formState: { errors, isSubmitting } 
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      appointmentDate: addDays(new Date(), 1),
      appointmentTime: setHours(setMinutes(new Date(), 0), 9),
      appointmentType: 'in-person',
      speciality: 'general',
      termsAccepted: true,
    }
  })

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log(data)
    setIsSubmitted(true)
  }

  const generateTimeSlots = () => {
    const slots = []
    const startHour = 9 // 9 AM
    const endHour = 17 // 5 PM
    
    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        if (hour === endHour && minute > 0) continue
        
        const time = new Date()
        time.setHours(hour, minute, 0)
        slots.push(time)
      }
    }
    
    return slots
  }

  const timeSlots = generateTimeSlots()
  
  const specialists = [
    {
      id: 1,
      name: "Dr. Antoine Mboyo",
      specialty: "Médecine Sexuelle Générale",
      category: "general",
      image: "/images/placeholders/doctor.svg",
    },
    {
      id: 2,
      name: "Dr. Claire Lukusa",
      specialty: "Santé Reproductive",
      category: "reproductive",
      image: "/images/placeholders/doctor.svg",
    },
    {
      id: 3,
      name: "Dr. Patrick Mutombo",
      specialty: "Thérapie Sexuelle",
      category: "therapy",
      image: "/images/placeholders/doctor.svg",
    },
    {
      id: 4,
      name: "Dr. Sylvie Kalala",
      specialty: "Éducation Sexuelle",
      category: "education",
      image: "/images/placeholders/doctor.svg",
    },
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-32 pb-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12"
          >
            <div className="text-center mb-6">
              <div className="rounded-full bg-green-100 dark:bg-green-900 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={40} className="text-green-600 dark:text-green-400" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Rendez-vous Confirmé!
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Votre demande de rendez-vous a été enregistrée avec succès.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 mb-8">
              <h2 className="font-semibold text-gray-900 dark:text-white mb-4">Détails du rendez-vous :</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Calendar size={20} className="text-primary-600 dark:text-primary-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Jeudi, 15 Juillet 2025
                  </span>
                </li>
                <li className="flex items-start">
                  <Clock size={20} className="text-primary-600 dark:text-primary-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    10:30 - 11:00
                  </span>
                </li>
                <li className="flex items-start">
                  <Users size={20} className="text-primary-600 dark:text-primary-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Dr. Antoine Mboyo - Médecine Sexuelle Générale
                  </span>
                </li>
              </ul>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Un email de confirmation a été envoyé à l'adresse email que vous avez fournie. 
              Vous recevrez un rappel 24 heures avant votre rendez-vous.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/" variant="outline">
                Retour à l'accueil
              </Button>
              <Button href="/articles" variant="primary">
                Parcourir nos articles
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-primary-600 dark:text-primary-400">
              Consultations en Ligne
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Prenez rendez-vous avec l'un de nos spécialistes qualifiés pour une consultation 
              personnalisée, que ce soit en personne ou à distance.
            </p>
          </motion.div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Left Column: Specialists */}
              <div className="lg:col-span-2 bg-gray-50 dark:bg-gray-700 p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Nos Spécialistes
                </h2>
                
                <div className="space-y-4">
                  {specialists.map((specialist) => (
                    <div 
                      key={specialist.id}
                      className="flex items-center p-3 rounded-lg hover:bg-white dark:hover:bg-gray-600 transition-colors cursor-pointer"
                    >
                      <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                        <img 
                          src={specialist.image} 
                          alt={specialist.name} 
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">
                          {specialist.name}
                        </h3>
                        <p className="text-sm text-primary-600 dark:text-primary-400">
                          {specialist.specialty}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                  <h3 className="font-medium mb-3 text-gray-900 dark:text-white">
                    Types de consultation
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center">
                      <Users size={16} className="mr-2 text-primary-600 dark:text-primary-400" />
                      <span>Consultation en personne</span>
                    </div>
                    <div className="flex items-center">
                      <Video size={16} className="mr-2 text-primary-600 dark:text-primary-400" />
                      <span>Consultation vidéo</span>
                    </div>
                    <div className="flex items-center">
                      <Phone size={16} className="mr-2 text-primary-600 dark:text-primary-400" />
                      <span>Consultation téléphonique</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column: Form */}
              <div className="lg:col-span-3 p-6">
                <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                  Prendre Rendez-vous
                </h2>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Personal Info */}
                  <div>
                    <h3 className="text-md font-medium mb-4 text-gray-700 dark:text-gray-300">
                      Informations personnelles
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="fullName" className="form-label">
                          Nom complet
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          className="form-input"
                          placeholder="Votre nom complet"
                          {...register('fullName')}
                        />
                        {errors.fullName && (
                          <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="form-label">
                          Adresse email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="form-input"
                          placeholder="exemple@email.com"
                          {...register('email')}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="form-label">
                          Numéro de téléphone
                        </label>
                        <input
                          id="phone"
                          type="text"
                          className="form-input"
                          placeholder="+243 XXXXXXXXX"
                          {...register('phone')}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Appointment Details */}
                  <div>
                    <h3 className="text-md font-medium mb-4 text-gray-700 dark:text-gray-300">
                      Détails du rendez-vous
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="appointmentDate" className="form-label">
                          Date du rendez-vous
                        </label>
                        <Controller
                          control={control}
                          name="appointmentDate"
                          render={({ field }) => (
                            <DatePicker
                              selected={field.value}
                              onChange={(date) => field.onChange(date)}
                              minDate={new Date()}
                              maxDate={addDays(new Date(), 30)}
                              dateFormat="dd/MM/yyyy"
                              locale={fr}
                              className="form-input"
                              wrapperClassName="w-full"
                            />
                          )}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="appointmentTime" className="form-label">
                          Heure du rendez-vous
                        </label>
                        <Controller
                          control={control}
                          name="appointmentTime"
                          render={({ field }) => (
                            <DatePicker
                              selected={field.value}
                              onChange={(date) => field.onChange(date)}
                              showTimeSelect
                              showTimeSelectOnly
                              timeIntervals={30}
                              timeCaption="Heure"
                              dateFormat="HH:mm"
                              includeTimes={timeSlots}
                              locale={fr}
                              className="form-input"
                              wrapperClassName="w-full"
                            />
                          )}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="speciality" className="form-label">
                          Spécialité recherchée
                        </label>
                        <select
                          id="speciality"
                          className="form-select"
                          {...register('speciality')}
                        >
                          <option value="general">Médecine Sexuelle Générale</option>
                          <option value="reproductive">Santé Reproductive</option>
                          <option value="therapy">Thérapie Sexuelle</option>
                          <option value="education">Éducation Sexuelle</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="appointmentType" className="form-label">
                          Type de consultation
                        </label>
                        <select
                          id="appointmentType"
                          className="form-select"
                          {...register('appointmentType')}
                        >
                          <option value="in-person">En personne</option>
                          <option value="video">Consultation vidéo</option>
                          <option value="phone">Consultation téléphonique</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  {/* Problem Description */}
                  <div>
                    <label htmlFor="problem" className="form-label">
                      Description du problème
                    </label>
                    <textarea
                      id="problem"
                      rows={4}
                      className="form-textarea"
                      placeholder="Décrivez brièvement votre problème ou la raison de votre consultation..."
                      {...register('problem')}
                    ></textarea>
                    {errors.problem && (
                      <p className="mt-1 text-sm text-red-600">{errors.problem.message}</p>
                    )}
                  </div>
                  
                  {/* Terms */}
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="termsAccepted"
                        type="checkbox"
                        className="form-checkbox"
                        {...register('termsAccepted')}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="termsAccepted" className="text-gray-700 dark:text-gray-300">
                        J'accepte les <a href="/conditions-utilisation" className="text-primary-600 dark:text-primary-400 hover:underline">termes et conditions</a> et la <a href="/politique-de-confidentialite" className="text-primary-600 dark:text-primary-400 hover:underline">politique de confidentialité</a>
                      </label>
                      {errors.termsAccepted && (
                        <p className="mt-1 text-sm text-red-600">{errors.termsAccepted.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Traitement en cours...' : 'Confirmer le rendez-vous'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
          
          {/* Additional Information */}
          <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Informations importantes
            </h2>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <strong>Confidentialité :</strong> Toutes les consultations sont strictement confidentielles, 
                conformément à notre politique de confidentialité et au secret médical.
              </p>
              <p>
                <strong>Annulation :</strong> Veuillez nous informer au moins 24 heures à l'avance si vous souhaitez 
                annuler ou reporter votre rendez-vous.
              </p>
              <p>
                <strong>Paiement :</strong> Le paiement s'effectue avant la consultation. Nous acceptons les paiements 
                par mobile money, carte bancaire et en espèces pour les consultations en personne.
              </p>
              <p>
                <strong>Urgences :</strong> En cas d'urgence médicale, veuillez vous rendre directement à l'hôpital le 
                plus proche ou appeler les services d'urgence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
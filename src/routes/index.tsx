import { createFileRoute } from '@tanstack/react-router'
import { useState, useRef, useEffect } from 'react'
import { useMutation } from 'convex/react'
import { api } from '../../convex/_generated/api'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const chatbotRef = useRef<{ openAndStartBooking: (message?: string) => void } | null>(null)

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <PropertyShowcase />
      <LeadCapture onBookViewing={() => {
        chatbotRef.current?.openAndStartBooking("User submitted details and wants to book a viewing.")
      }} />
      <TrustBadges />
      <ChatBot ref={chatbotRef} />
    </div>
  )
}

function Hero() {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-transparent to-amber-600/20" />
      </div>
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-6">Premium Sandton Living</p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Find Your Dream Home<br />
          <span className="text-amber-500">in Sandton</span> Today
        </h1>
        <p className="text-xl text-gray-300 mb-10">Get matched with the perfect property in minutes</p>
        <button
          onClick={scrollToForm}
          className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-10 py-4 text-lg transition-all duration-300"
        >
          Book a Viewing Now
        </button>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

function PropertyShowcase() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-600 text-sm tracking-widest uppercase mb-4">Featured Property</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Modern Luxury Apartment</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg aspect-[4/3] flex items-center justify-center">
            <div className="text-gray-500 text-lg flex flex-col items-center gap-4">
              <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Sandton Apartment</span>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4">Sandton Heights Estate</h3>
            <p className="text-gray-600 mb-8 text-lg">
              Experience refined urban living in the heart of Sandton. This stunning apartment offers 
              contemporary design with premium finishes throughout.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="border-l-4 border-amber-500 pl-4">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Price Range</p>
                <p className="text-2xl font-bold text-gray-900">R1.2M – R2.5M</p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Bedrooms</p>
                <p className="text-2xl font-bold text-gray-900">2 – 3</p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Location</p>
                <p className="text-2xl font-bold text-gray-900">Sandton, JHB</p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Security</p>
                <p className="text-2xl font-bold text-gray-900">24/7 Guarded</p>
              </div>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Secure estate with biometric access
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Covered parking included
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                5 min to Sandton City Mall
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                World-class finishes & fixtures
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function LeadCapture({ onBookViewing }: { onBookViewing: () => void }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [budget, setBudget] = useState('')
  const [area, setArea] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const createLead = useMutation(api.leads.createLead)

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('handleSubmit called', { name, phone, budget, area })
    
    if (!name.trim() || !phone.trim() || !budget || !area) {
      setError('Please complete all fields.')
      setSuccess(false)
      return
    }
    
    setError('')
    setSuccess(true)
    await createLead({ name, phone, budget, area })
    
    // Open chatbot and send message - wait a bit for state to update
    setTimeout(() => {
      onBookViewing()
    }, 100)
  }

  return (
    <section id="lead-form" className="py-24 px-6 bg-black relative z-10">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-amber-500 text-sm tracking-widest uppercase mb-4">Get Started</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Book Your Private Viewing</h2>
          <p className="text-gray-400">Fill in your details and we'll match you with the perfect property</p>
        </div>
        
        {error && (
          <div className="mb-6 p-4 bg-red-900/50 border border-red-700 text-red-200 rounded-lg text-center">
            {error}
          </div>
        )}
        
        {success && (
          <div className="mb-6 p-4 bg-green-900/50 border border-green-700 text-green-200 rounded-lg text-center">
            Request submitted. We'll confirm shortly.
          </div>
        )}
        
        <div className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2 text-sm uppercase tracking-wide">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 text-white px-5 py-4 focus:border-amber-500 focus:outline-none transition-colors"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2 text-sm uppercase tracking-wide">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 text-white px-5 py-4 focus:border-amber-500 focus:outline-none transition-colors"
              placeholder="+27 XX XXX XXXX"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 mb-2 text-sm uppercase tracking-wide">Budget</label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 text-white px-5 py-4 focus:border-amber-500 focus:outline-none transition-colors"
              >
                <option value="">Select budget</option>
                <option value="under-1m">Under R1M</option>
                <option value="1m-1.5m">R1M – R1.5M</option>
                <option value="1.5m-2m">R1.5M – R2M</option>
                <option value="2m-2.5m">R2M – R2.5M</option>
                <option value="2.5m-3m">R2.5M – R3M</option>
                <option value="above-3m">Above R3M</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-300 mb-2 text-sm uppercase tracking-wide">Preferred Area</label>
              <select
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 text-white px-5 py-4 focus:border-amber-500 focus:outline-none transition-colors"
              >
                <option value="">Select area</option>
                <option value="sandton">Sandton</option>
                <option value="fourways">Fourways</option>
                <option value="midrand">Midrand</option>
                <option value="roodepoort">Roodepoort</option>
                <option value="randburg">Randburg</option>
              </select>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              console.log('Book a Viewing Now clicked')
              onBookViewing()
            }}
            className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold px-10 py-4 text-lg transition-all duration-300 mt-4 cursor-pointer relative z-20"
          >
            Book a Viewing Now
          </button>
        </div>
      </div>
    </section>
  )
}

function TrustBadges() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-amber-600 text-sm tracking-widest uppercase mb-8">Trusted by serious buyers</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-900 mb-2">500+</p>
            <p className="text-gray-500 text-sm uppercase tracking-wide">Happy Clients</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-900 mb-2">R2.5B+</p>
            <p className="text-gray-500 text-sm uppercase tracking-wide">Property Sold</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-900 mb-2">15+</p>
            <p className="text-gray-500 text-sm uppercase tracking-wide">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-900 mb-2">98%</p>
            <p className="text-gray-500 text-sm uppercase tracking-wide">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}

interface Message {
  id: number
  role: 'user' | 'assistant'
  content: string
}

interface ChatBotProps {
  ref: React.RefObject<{ openAndStartBooking: (message?: string) => void } | null>
}

function ChatBot({ ref }: ChatBotProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, role: 'assistant', content: "Hi 👋 Are you currently looking to buy or just exploring options?" }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [booking, setBooking] = useState<{ 
    preferred_day: string | null, 
    preferred_time: string | null, 
    isBooking: boolean,
    confirmed: boolean,
    // Collection state
    phone: string | null,
    budget: string | null,
    area: string | null,
    propertyType: string | null,
    // Track what we've collected
    hasPhone: boolean,
    hasBudget: boolean,
    hasArea: boolean,
    hasPropertyType: boolean
  }>({ 
    preferred_day: null, 
    preferred_time: null, 
    isBooking: false, 
    confirmed: false,
    phone: null,
    budget: null,
    area: null,
    propertyType: null,
    hasPhone: false,
    hasBudget: false,
    hasArea: false,
    hasPropertyType: false
  })
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref) {
      ref.current = {
        openAndStartBooking: (message?: string) => {
          setIsOpen(true)
          const userMsg = message || "User wants to book a viewing"
          
          // If user came from form submission, skip to phone collection
          const isFormSubmission = userMsg.includes("submitted details")
          
          if (isFormSubmission) {
            setBooking({
              preferred_day: null, preferred_time: null, isBooking: false, confirmed: true,
              phone: null, budget: null, area: null, propertyType: null,
              hasPhone: false, hasBudget: false, hasArea: false, hasPropertyType: false
            })
            setTimeout(() => {
              setMessages(prev => [...prev, { id: Date.now(), role: 'user', content: userMsg }])
              setTimeout(() => {
                setMessages(prev => [...prev, { id: Date.now() + 1, role: 'assistant', content: "Perfect — what's the best number for the agent to confirm your viewing?" }])
              }, 500)
            }, 300)
          } else {
            // Normal booking flow from chat
            setBooking({
              preferred_day: null, preferred_time: null, isBooking: true, confirmed: false,
              phone: null, budget: null, area: null, propertyType: null,
              hasPhone: false, hasBudget: false, hasArea: false, hasPropertyType: false
            })
            setTimeout(() => {
              setMessages(prev => [...prev, { id: Date.now(), role: 'user', content: userMsg }])
              setTimeout(() => {
                setMessages(prev => [...prev, { id: Date.now() + 1, role: 'assistant', content: "Great — let's get your viewing scheduled. When would you like to come through — this week or weekend?" }])
              }, 500)
            }, 300)
          }
        }
      }
    }
  }, [ref])

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isOpen])

  const addMessage = (content: string, role: 'user' | 'assistant') => {
    setMessages(prev => [...prev, { id: Date.now(), role, content }])
  }

  const sendWithDelay = (content: string, role: 'user' | 'assistant' = 'assistant') => {
    setIsTyping(true)
    setTimeout(() => {
      addMessage(content, role)
      setIsTyping(false)
    }, 800)
  }

  const extractDay = (text: string): string | null => {
    const lower = text.toLowerCase()
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    for (const day of days) {
      if (lower.includes(day)) {
        return day.charAt(0).toUpperCase() + day.slice(1)
      }
    }
    return null
  }

  const extractTime = (text: string): string | null => {
    const lower = text.toLowerCase()
    const timePatterns = [
      /\d{1,2}\s*(am|pm)/i,
      /\d{1,2}:\d{2}/,
      /noon/i,
      /morning/i,
      /afternoon/i,
      /evening/i
    ]
    for (const pattern of timePatterns) {
      const match = lower.match(pattern)
      if (match) return match[0]
    }
    return null
  }

  const handleSend = () => {
    if (!input.trim()) return
    
    const userMessage = input.trim()
    addMessage(userMessage, 'user')
    setInput('')
    
    const lower = userMessage.toLowerCase()
    
    // Detect if user is changing their answer
    const isCorrection = lower.includes('actually') || lower.includes('change') || lower.includes('update') || 
                         lower.includes('different') || lower.includes('instead') || lower.startsWith('make it') || lower.startsWith('lets do')
    
    const day = extractDay(userMessage)
    const time = extractTime(userMessage)
    
    // Handle corrections first - always acknowledge and update
    if (isCorrection && (booking.isBooking || booking.preferred_day || booking.preferred_time)) {
      if (day) setBooking(prev => ({ ...prev, preferred_day: day }))
      if (time) setBooking(prev => ({ ...prev, preferred_time: time }))
      sendWithDelay("No problem — updating that.")
      const newDay = day || booking.preferred_day
      const newTime = time || booking.preferred_time
      if (newDay && newTime) {
        confirmBooking(newDay, newTime)
      } else if (newDay) {
        sendWithDelay(`What time works for you on ${newDay}?`)
      } else if (newTime) {
        sendWithDelay(`Which day should I schedule that for?`)
      }
      return
    }
    
    // If user cancels
    if (lower === 'no' || lower === 'nope' || lower.includes('change my mind')) {
      if (booking.confirmed || booking.isBooking) {
        resetBooking()
        sendWithDelay("No problem! What else can I help you with?")
        return
      }
    }
    
    // If in booking mode (collecting day/time) - entry point
    if (booking.isBooking && !booking.confirmed) {
      // User gave both day and time
      if (day && time) {
        confirmBooking(day, time)
        return
      }
      
      // User gave only a day
      if (day) {
        setBooking(prev => ({ ...prev, preferred_day: day }))
        if (booking.preferred_time) {
          confirmBooking(day, booking.preferred_time)
        } else {
          sendWithDelay(`What time works for you on ${day}?`)
        }
        return
      }
      
      // User gave only a time
      if (time) {
        setBooking(prev => ({ ...prev, preferred_time: time }))
        if (booking.preferred_day) {
          confirmBooking(booking.preferred_day, time)
        } else {
          sendWithDelay(`Which day should I schedule that for?`)
        }
        return
      }
      
      // Handle "this week"
      if (lower.includes('this week') && !day) {
        sendWithDelay("Which day works best for you?")
        return
      }
      
      // Handle "weekend"
      if (lower.includes('weekend') && !day) {
        sendWithDelay("Saturday or Sunday?")
        return
      }
      
      // Handle "next week"
      if (lower.includes('next week') && !day) {
        sendWithDelay("Which day works best next week?")
        return
      }
      
      // Handle "next month"
      if (lower.includes('next month') && !day) {
        sendWithDelay("Which day next month works for you?")
        return
      }
      
      // Nothing detected - ask naturally
      sendWithDelay("When would you like to come through — this week or weekend?")
      return
    }
    
    // If viewing is confirmed - collect missing info only
    if (booking.confirmed) {
      // Collect phone
      if (!booking.hasPhone && (lower.match(/\d/) || lower.includes('zero'))) {
        setBooking(prev => ({ ...prev, phone: userMessage, hasPhone: true }))
        sendWithDelay("Just so we prepare the best options for you — what budget range are you working with?")
        return
      }
      
      // Collect budget
      if (booking.hasPhone && !booking.hasBudget && (lower.includes('million') || lower.includes('k ') || lower.includes('under') || lower.includes('around') || lower.match(/\d/))) {
        setBooking(prev => ({ ...prev, budget: userMessage, hasBudget: true }))
        sendWithDelay("And which areas are you most interested in?")
        return
      }
      
      // Collect area
      if (booking.hasPhone && booking.hasBudget && !booking.hasArea && (
        lower.includes('sandton') || lower.includes('midrand') || lower.includes('bryanston') || 
        lower.includes('fourways') || lower.includes('rosebank') || lower.includes('north') || 
        lower.includes('south') || lower.includes('no preference') || lower.includes('anywhere') || 
        lower.includes('any area') || lower.includes('anywhere')
      )) {
        setBooking(prev => ({ ...prev, area: userMessage, hasArea: true }))
        sendWithDelay("Are you looking for an apartment, house, or townhouse?")
        return
      }
      
      // Collect property type
      if (booking.hasPhone && booking.hasBudget && booking.hasArea && !booking.hasPropertyType && (
        lower.includes('house') || lower.includes('apartment') || lower.includes('townhouse') || 
        lower.includes('flat') || lower.includes('unit') || lower.includes('no preference') || lower.includes('any')
      )) {
        resetBooking()
        sendWithDelay("Perfect — you're all set! 🏠 The agent will confirm your viewing shortly. Looking forward to helping you find your new home!")
        return
      }
      
      // If we have phone but need budget
      if (booking.hasPhone && !booking.hasBudget) {
        sendWithDelay("What budget range are you working with?")
        return
      }
      
      // If we have budget but need area
      if (booking.hasPhone && booking.hasBudget && !booking.hasArea) {
        sendWithDelay("Which areas are you most interested in?")
        return
      }
      
      // If we have area but need property type
      if (booking.hasPhone && booking.hasBudget && booking.hasArea && !booking.hasPropertyType) {
        sendWithDelay("Are you looking for an apartment, house, or townhouse?")
        return
      }
      
      return
    }
    
    // Not in booking - handle general conversation
    if (lower.includes('yes') || lower.includes('sure') || lower.includes('book') || lower.includes('schedule')) {
      setBooking(prev => ({ ...prev, isBooking: true }))
      sendWithDelay("When would you like to come through for a viewing — this week or over the weekend?")
      return
    }
    
    if (lower.includes('looking') || lower.includes('buy') || lower.includes('interested')) {
      sendWithDelay("Great! When would you like to start viewing properties?")
      return
    }
    
    sendWithDelay("I'm here to help you find your perfect property. Would you like to book a viewing?")
  }
  
  const processDayTimeInput = (day: string | null, time: string | null) => {
    // User gave both day and time
    if (day && time) {
      confirmBooking(day, time)
      return
    }
    
    // User gave only a day
    if (day) {
      setBooking(prev => ({ ...prev, preferred_day: day }))
      if (booking.preferred_time) {
        confirmBooking(day, booking.preferred_time)
      } else {
        sendWithDelay(`Perfect — what time works for you on ${day}?`)
      }
      return
    }
    
    // User gave only a time
    if (time) {
      setBooking(prev => ({ ...prev, preferred_time: time }))
      if (booking.preferred_day) {
        confirmBooking(booking.preferred_day, time)
      } else {
        sendWithDelay(`Got it — which day should I schedule that for?`)
      }
      return
    }
    
    // Nothing detected
    if (booking.preferred_day || booking.preferred_time) {
      sendWithDelay("I didn't quite catch that. Could you clarify the day or time?")
    } else {
      sendWithDelay("What day works best for you?")
    }
  }
  
  const confirmBooking = (day: string, time: string) => {
    setBooking(prev => ({
      ...prev,
      preferred_day: day,
      preferred_time: time,
      isBooking: false,
      confirmed: true,
      hasPhone: false,
      hasBudget: false,
      hasArea: false,
      hasPropertyType: false
    }))
    sendWithDelay(`Perfect — you're booked for ${day} at ${time}. The agent will confirm shortly.`)
    setTimeout(() => {
      sendWithDelay("What's the best number for the agent to confirm your viewing?")
    }, 1000)
  }
  
  const resetBooking = () => {
    setBooking({
      preferred_day: null,
      preferred_time: null,
      isBooking: false,
      confirmed: false,
      phone: null,
      budget: null,
      area: null,
      propertyType: null,
      hasPhone: false,
      hasBudget: false,
      hasArea: false,
      hasPropertyType: false
    })
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-amber-500 hover:bg-amber-600 text-black w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>
      
      {isOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-4 sm:right-4 sm:left-auto w-[calc(100%-20px)] sm:w-96 sm:max-w-[calc(100vw-32px)] h-[calc(100vh-80px)] sm:h-[550px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 border border-gray-200 m-2 sm:m-0">
          <div className="bg-black px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold">Sandton Assistant</p>
                <p className="text-gray-400 text-xs">Online now</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm ${
                    msg.role === 'user'
                      ? 'bg-black text-white rounded-br-md'
                      : 'bg-white text-gray-800 border border-gray-200 rounded-bl-md shadow-sm'
                  }`}
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-gray-100 border-0 px-4 py-3 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="bg-amber-500 hover:bg-amber-600 disabled:bg-gray-300 text-black w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
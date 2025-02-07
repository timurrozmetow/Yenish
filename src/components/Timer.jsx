import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns'

const targetDates = [
  { date: new Date('2025-06-15T00:00:00'), label: 'До Армии осталось:' },
  { date: new Date('2027-05-01T00:00:00'), label: 'До Свободы осталось:' }
]

const calculateTimeLeft = (target) => {
  const now = new Date()
  if (now >= target) return null
  
  return {
    days: differenceInDays(target, now),
    hours: differenceInHours(target, now) % 24,
    minutes: differenceInMinutes(target, now) % 60,
    seconds: differenceInSeconds(target, now) % 60
  }
}

const TimeUnit = ({ value, label }) => (
  <motion.div 
    className="time-unit"
    initial={{ scale: 0.8 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="digit-box">
      <span className="digit">
        {value.toString().padStart(2, '0')}
      </span>
    </div>
    <span className="time-label">{label}</span>
  </motion.div>
)

export const Timer = () => {
  const [currentTarget, setCurrentTarget] = useState(0)
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDates[currentTarget].date))

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = calculateTimeLeft(targetDates[currentTarget].date)
      
      if (!newTime) {
        if (currentTarget < targetDates.length - 1) {
          setCurrentTarget(prev => prev + 1)
        }
        return
      }
      
      setTimeLeft(newTime)
    }, 1000)

    return () => clearInterval(timer)
  }, [currentTarget])

  if (!timeLeft) {
    return (
      <div className="timer-finished">
        <h2>{targetDates[currentTarget].label}</h2>
        <div className="finished-text">Время пришло! 🎉</div>
      </div>
    )
  }

  return (
    <div className="timer-container">
      <motion.h2 
        className="timer-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {targetDates[currentTarget].label}
      </motion.h2>
      
      <div className="time-grid">
        <TimeUnit value={timeLeft.days} label="дней" />
        <div className="separator"></div>
        <TimeUnit value={timeLeft.hours} label="часов" />
        <div className="separator"></div>
        <TimeUnit value={timeLeft.minutes} label="минут" />
        <div className="separator"></div>
        <TimeUnit value={timeLeft.seconds} label="секунд" />
      </div>
    </div>
  )
}
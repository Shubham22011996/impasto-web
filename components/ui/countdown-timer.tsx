"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface CountdownTimerProps {
  targetDate: Date
  className?: string
}

interface TimeLeft {
  days: number
  hours: number
  mins: number
  secs: number
}

export function CountdownTimer({ targetDate, className }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 30,
    hours: 22,
    mins: 48,
    secs: 22,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance < 0) {
        clearInterval(timer)
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const timeUnits = [
    { label: "Day", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.mins },
    { label: "Sec", value: timeLeft.secs },
  ]

  return (
    <div className={cn("flex gap-3", className)}>
      {timeUnits.map((unit) => (
        <div key={unit.label} className="text-center">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-accent rounded-lg flex items-center justify-center mb-1">
            <span className="text-xl md:text-2xl font-bold text-accent-foreground">
              {String(unit.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs text-muted-foreground">{unit.label}</span>
        </div>
      ))}
    </div>
  )
}

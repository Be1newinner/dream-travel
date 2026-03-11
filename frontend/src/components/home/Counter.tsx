"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

type CounterItem = {
  icon: string
  bg: string
  label: string
  target: number
}

const counters: CounterItem[] = [
  {
    icon: "/svg/airplane.svg",
    bg: "bg-yellow-500",
    label: "Tour Completed",
    target: 26,
  },
  {
    icon: "/svg/worker.svg",
    bg: "bg-orange-500",
    label: "Team Members",
    target: 15,
  },
  {
    icon: "/svg/traveler.svg",
    bg: "bg-blue-500",
    label: "Happy Travelers",
    target: 40,
  },
  {
    icon: "/svg/retation.svg",
    bg: "bg-green-500",
    label: "Repeat Clients",
    target: 12,
  },
]

export default function Counter() {
  const [counts, setCounts] = useState<number[]>(counters.map(() => 0))
  const ref = useRef<HTMLDivElement | null>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true

          counters.forEach((item, index) => {
            let start = 0
            const end = item.target
            const duration = 1500
            const stepTime = Math.floor(duration / end)

            const timer = setInterval(() => {
              start += 1

              setCounts((prev) => {
                const updated = [...prev]
                updated[index] = start
                return updated
              })

              if (start === end) clearInterval(timer)
            }, stepTime)
          })
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="bg-[url('/home3-counter-bg.webp')] bg-cover bg-center grid grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto bg-[#F0F0F0] rounded-lg py-10 lg:h-[200px]"
    >
      {counters.map((item, index) => (
        <div
          key={index}
          className={`flex items-center gap-4 px-10 ${
            index !== counters.length - 1 ? "border-r" : ""
          }`}
        >
          <div
            className={`w-[65px] h-[65px] flex items-center justify-center rounded-full ${item.bg}`}
          >
            <Image src={item.icon} alt={item.label} width={40} height={28} />
          </div>

          <div>
            <h2 className="text-xl font-bold">{counts[index]}K+</h2>
            <p className="text-lg font-medium">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
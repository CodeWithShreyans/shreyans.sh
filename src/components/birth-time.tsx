"use client"

import { useEffect, useState } from "react"
import { Badge } from "./ui/badge"

const getTimeElapsed = (startDate: number) => {
    const timeDifference = Date.now() - startDate

    // Define milliseconds in a unit of time
    const millisecondsInSecond = 1000
    const millisecondsInMinute = millisecondsInSecond * 60
    const millisecondsInHour = millisecondsInMinute * 60
    const millisecondsInDay = millisecondsInHour * 24
    const millisecondsInMonth = millisecondsInDay * (365.25 / 12) // Approximate days in a month

    // Calculate years, months, days, hours, minutes, and seconds
    const years = Math.floor(timeDifference / millisecondsInMonth / 12)
    const months = Math.floor((timeDifference / millisecondsInMonth) % 12)
    const days = Math.floor((timeDifference / millisecondsInDay) % 30.44) // Approximate days in a month
    const hours = Math.floor((timeDifference / millisecondsInHour) % 24)
    const minutes = Math.floor((timeDifference / millisecondsInMinute) % 60)

    return { years, months, days, hours, minutes }
}

const BirthTime = () => {
    const [time, setTime] = useState(getTimeElapsed(1179628980000))

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((time) => {
                return { ...time, minutes: time.minutes++ }
            })
        }, 60000)

        return () => clearInterval(timer)
    }, [])

    return (
        <Badge variant="secondary" className="tabular-nums text-sm"> {`${time.years} years ${time.months} months ${time.days} days ${time.hours} hours and ${time.minutes} minutes`} </Badge>
    )
}

export default BirthTime

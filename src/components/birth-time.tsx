"use client"

import { InlineBadge } from "./ui/badge"

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
    const time = getTimeElapsed(1179628980000)

    return (
        <InlineBadge
            className="px-2 text-sm tabular-nums text-primary/75"
            variant="secondary"
        >
            {`${time.years} years ` +
                (time.months != 0 ? `${time.months} months ` : "") +
                (time.days != 0 ? `${time.days} days ` : "") +
                (time.hours != 0 ? `${time.hours} hours ` : "") +
                (time.minutes != 0 ? `and ${time.minutes} minutes` : "")}
        </InlineBadge>
    )
}

export default BirthTime

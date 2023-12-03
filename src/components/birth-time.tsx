"use client"

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

    return { years, months, days, hours }
}

const BirthTime = () => {
    const time = getTimeElapsed(1179628980000)

    return (
        <span className="font-semibold">
            {`${time.years} years ` +
                (time.months != 0 ? `${time.months} months ` : "") +
                (time.days != 0 ? `${time.days} days ` : "") +
                (time.hours != 0 ? `and ${time.hours} hours ` : "")}
        </span>
    )
}

export default BirthTime

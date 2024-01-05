import type { ClassNameValue } from "tailwind-merge"

import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassNameValue[]) => {
    return twMerge(inputs)
}

export const random = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min)) + min

export const debounce = <S>(callback: (...args: S[]) => void, wait: number) => {
    let timeoutId: number | undefined = undefined
    return (...args: S[]) => {
        window.clearTimeout(timeoutId)
        timeoutId = window.setTimeout(() => {
            callback(...args)
        }, wait)
    }
}

export const range = (start: number, end: number, step = 1) => {
    const output = []
    if (typeof end === "undefined") {
        // biome-ignore lint/style/noParameterAssign: This is a valid use case
        end = start
        // biome-ignore lint/style/noParameterAssign: This is a valid use case
        start = 0
    }
    for (let i = start; i < end; i += step) {
        output.push(i)
    }
    return output
}

export const getTimeElapsed = (startDateMs: number) => {
    const timeDifference = Date.now() - startDateMs

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
    const seconds = Math.floor((timeDifference / millisecondsInSecond) % 60)

    return { days, hours, minutes, months, seconds, years }
}

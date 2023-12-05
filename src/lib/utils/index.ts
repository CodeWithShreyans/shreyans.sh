import type { ClassNameValue } from "tailwind-merge"

import { twMerge } from "tailwind-merge"

const cn = (...inputs: ClassNameValue[]) => {
    return twMerge(inputs)
}

const random = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min)) + min

const debounce = <S>(callback: (...args: S[]) => void, wait: number) => {
    let timeoutId: number | undefined = undefined
    return (...args: S[]) => {
        window.clearTimeout(timeoutId)
        timeoutId = window.setTimeout(() => {
            callback(...args)
        }, wait)
    }
}

const range = (start: number, end: number, step = 1) => {
    const output = []
    if (typeof end === "undefined") {
        end = start
        start = 0
    }
    for (let i = start; i < end; i += step) {
        output.push(i)
    }
    return output
}

export { cn, debounce, random, range }

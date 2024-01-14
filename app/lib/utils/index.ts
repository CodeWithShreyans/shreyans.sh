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

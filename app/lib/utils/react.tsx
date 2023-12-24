/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import type { ReactNode } from "react"
import type { SpringValue } from "react-spring"

import React from "react"

import { animated, useSpring } from "react-spring"

import { env } from "@/env.mjs"

import { random } from "."

const useHasMounted = () => {
   const [hasMounted, setHasMounted] = React.useState(false)
   // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
   React.useEffect(() => {
      setHasMounted(true)
   }, [])
   return hasMounted
}

const useToggle = (initialValue = false) => {
   const [value, setValue] = React.useState(initialValue)
   // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
   const toggle = React.useCallback(() => {
      setValue((v) => !v)
   }, [])
   return [value, toggle]
}

const usePrefersReducedMotion = () => {
   const QUERY = "(prefers-reduced-motion: no-preference)"
   const isRenderingOnServer = typeof window === "undefined"
   const getInitialState = () => {
      // For our initial server render, we won't know if the user
      // prefers reduced motion, but it doesn't matter. This value
      // will be overwritten on the client, before any animations
      // occur.
      return isRenderingOnServer ? true : !window.matchMedia(QUERY).matches
   }
   const [prefersReducedMotion, setPrefersReducedMotion] =
      React.useState(getInitialState)
   // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
   React.useEffect(() => {
      const mediaQueryList = window.matchMedia(QUERY)
      const listener = (event: MediaQueryListEvent) => {
         setPrefersReducedMotion(!event.matches)
      }
      if (mediaQueryList.addEventListener) {
         mediaQueryList.addEventListener("change", listener)
      } else {
         mediaQueryList.addListener(listener)
      }
      return () => {
         if (mediaQueryList.removeEventListener) {
            mediaQueryList.removeEventListener("change", listener)
         } else {
            mediaQueryList.removeListener(listener)
         }
      }
   }, [])
   return prefersReducedMotion
}

type BoopConfig = {
   rotation?: number
   scale?: number
   springConfig?: {
      friction?: number
      tension?: number
   }
   timing?: number
   x?: number
   y?: number
}
const useBoop = ({
   rotation = 0,
   scale = 1,
   springConfig = {
      friction: 10,
      tension: 300,
   },
   timing = 150,
   x = 0,
   y = 0,
}: BoopConfig): [
   (
      | {
           transform: SpringValue<string>
        }
      | Record<string, never>
   ),
   React.MouseEventHandler<HTMLSpanElement>,
] => {
   const prefersReducedMotion = usePrefersReducedMotion()
   const [isBooped, setIsBooped] = React.useState(false)
   const style = useSpring({
      config: springConfig,
      transform: isBooped
         ? `translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})`
         : `translate(0px, 0px)
         rotate(0deg)
         scale(1)`,
   })
   // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
   React.useEffect(() => {
      if (!isBooped) {
         return
      }
      const timeoutId = window.setTimeout(() => {
         setIsBooped(false)
      }, timing)
      return () => {
         window.clearTimeout(timeoutId)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [isBooped])
   const trigger: React.MouseEventHandler<HTMLSpanElement> =
      // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
      React.useCallback(() => {
         setIsBooped(true)
      }, [])
   const appliedStyle = prefersReducedMotion ? {} : style
   return [appliedStyle, trigger]
}

const Boop = ({
   boopConfig,
   children,
}: {
   boopConfig: BoopConfig
   children: ReactNode
}) => {
   const [style, trigger] = useBoop(boopConfig)
   return (
      <animated.span style={style} onMouseEnter={trigger}>
         {children}
      </animated.span>
   )
}

const useStickyState = <S,>(defaultValue: S, key: string) => {
   const [value, setValue] = React.useState<S>(() => {
      const stickyValue = window.localStorage.getItem(key)
      return stickyValue !== null
         ? (JSON.parse(stickyValue) as S)
         : defaultValue
   })
   React.useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value))
   }, [key, value])
   return [value, setValue]
}

const useInterval = (callback: () => void, delay: number | undefined) => {
   const intervalRef = React.useRef(0)
   const savedCallback = React.useRef(callback)
   // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
   React.useEffect(() => {
      savedCallback.current = callback
   }, [callback])
   // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
   React.useEffect(() => {
      const tick = () => savedCallback.current()
      intervalRef.current = window.setInterval(tick, delay)
      return () => window.clearInterval(intervalRef.current)
   }, [delay])
   return intervalRef
}

const useTimeout = (callback: () => void, delay: number) => {
   const timeoutRef = React.useRef(0)
   const savedCallback = React.useRef(callback)
   // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
   React.useEffect(() => {
      savedCallback.current = callback
   }, [callback])
   // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
   React.useEffect(() => {
      const tick = () => savedCallback.current()

      timeoutRef.current = window.setTimeout(tick, delay)
      return () => window.clearTimeout(timeoutRef.current)
   }, [delay])
   return timeoutRef
}

const useRandomInterval = (
   callback: () => void,
   minDelay: number,
   maxDelay: number,
) => {
   const timeoutId = React.useRef(0)
   const savedCallback = React.useRef(callback)
   // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
   React.useEffect(() => {
      savedCallback.current = callback
   }, [callback])
   // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
   React.useEffect(() => {
      const handleTick = () => {
         const nextTickAt = random(minDelay, maxDelay)
         timeoutId.current = window.setTimeout(() => {
            savedCallback.current()
            handleTick()
         }, nextTickAt)
      }
      handleTick()

      return () => window.clearTimeout(timeoutId.current)
   }, [minDelay, maxDelay])
   // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
   const cancel = React.useCallback(() => {
      window.clearTimeout(timeoutId.current)
   }, [])
   return cancel
}

const useRetryUntilResolved = (callback: () => boolean, interval = 100) => {
   const [hasResolved, setHasResolved] = React.useState(false)
   useInterval(
      () => {
         const result = callback()
         if (result) {
            setHasResolved(true)
         }
      },
      hasResolved ? undefined : interval,
   )
   return hasResolved
}

const useMousePosition = () => {
   const [mousePosition, setMousePosition] = React.useState<{
      x: null | number
      y: null | number
   }>({
      x: null,
      y: null,
   })
   // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
   React.useEffect(() => {
      const updateMousePosition = (ev: MouseEvent) => {
         setMousePosition({ x: ev.clientX, y: ev.clientY })
      }
      window.addEventListener("mousemove", updateMousePosition)
      return () => {
         window.removeEventListener("mousemove", updateMousePosition)
      }
   }, [])
   return mousePosition
}

const VisuallyHidden = ({
   children,
   ...delegated
}: {
   children: ReactNode
   delegated: React.ButtonHTMLAttributes<HTMLAllCollection>
}) => {
   const hiddenStyles: React.CSSProperties = {
      border: 0,
      clip: "rect(0 0 0 0)",
      display: "inline-block",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      width: 1,
   }
   const [forceShow, setForceShow] = React.useState(false)
   // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
   React.useEffect(() => {
      if (env.NODE_ENV !== "production") {
         const handleKeyDown = (ev: KeyboardEvent) => {
            if (ev.key === "Alt") {
               setForceShow(true)
            }
         }
         const handleKeyUp = (ev: KeyboardEvent) => {
            if (ev.key === "Alt") {
               setForceShow(false)
            }
         }
         window.addEventListener("keydown", handleKeyDown)
         window.addEventListener("keyup", handleKeyUp)
         return () => {
            window.removeEventListener("keydown", handleKeyDown)
            window.removeEventListener("keyup", handleKeyUp)
         }
      }
   }, [])
   if (forceShow) {
      return children
   }
   return (
      <span style={hiddenStyles} {...delegated}>
         {children}
      </span>
   )
}

export {
   Boop,
   VisuallyHidden,
   useBoop,
   useHasMounted,
   useInterval,
   useMousePosition,
   usePrefersReducedMotion,
   useRandomInterval,
   useRetryUntilResolved,
   useStickyState,
   useTimeout,
   useToggle,
}

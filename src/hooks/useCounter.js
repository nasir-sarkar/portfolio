import { useState, useEffect } from 'react'

/**
 * @param {number}  target     Final value
 * @param {boolean} isDecimal  If true, returns 2 decimal places
 * @param {boolean} started    Counter only runs when this is true
 */

export function useCounter(target, isDecimal = false, started) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!started) return
    const duration = 2000
    const step = target / (duration / 16)
    let current = 0

    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      setValue(isDecimal ? parseFloat(current.toFixed(2)) : Math.floor(current))
    }, 16)

    return () => clearInterval(timer)
  }, [started, target, isDecimal])

  return value
}

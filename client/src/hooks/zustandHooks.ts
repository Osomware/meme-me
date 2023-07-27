import { useState, useEffect } from 'react'

export const useZustand = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  storeCallback: (state: T) => F
): F | undefined => {
  const result = store(storeCallback) as F
  const [state, setState] = useState<F>()

  useEffect(() => {
    setState(result)
  }, [result])

  return state
}

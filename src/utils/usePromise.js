import { useRef } from 'preact/hooks'

export const usePromise = () => {
  const ref = []
  const container = useRef(ref)

  ref[0] = new Promise((resolve, reject) => {
    ref[1] = resolve
    ref[2] = reject
  })

  return container.current
}

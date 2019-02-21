import { useEffect, useState } from 'react'

import { random } from './helpers'

let controller

export default function useFetch(url, opt = { }) {
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState(null)
    const [idx, setIdx] = useState(random())

    const agent = opt.agent || fetch

    useEffect(() => {
      controller = new AbortController() 
      const signal = controller.signal;

      setLoading(true)

      if (signal.aborted) {
        controller.abort()
      }
      
      const promise = typeof url === 'string' ? agent(url, { ...opt, signal }) : url({ signal })
      
      promise
        .then(value => {
          setResult(value);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        })
  
      return () => {
        controller.abort()
      }
    }, [...opt, idx])

    return {
        cancel: () => controller ? controller.abort() : cancelBeforeRequest(),
        invoke: () => setIdx(random()),
        loading,
        result,
    }
}

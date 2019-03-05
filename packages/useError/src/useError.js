import { useState } from 'react'

export default function useError() {
  const [err, setState] = useState()

  if (err) {
    throw err
  }

  return [err => { setState(err) }];
}

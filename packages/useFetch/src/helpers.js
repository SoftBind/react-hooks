export const cancelBeforeRequest = () => { throw Error('Can not cancel before request was dispatched') }
export const random = () => Math.random().toString().substr(2, 10)

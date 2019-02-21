# useFetch

## Installation

`npm i @softbind/hook-use-fetch --save`

## API

### `useFetch(text)`

#### Arguments
- `url: String | () => Promise<any>`: url to api or function which need to return promise.
- `opt: Object`: you can pass all options that occur in [Request](https://developer.mozilla.org/en-US/docs/Web/API/Request)

```js
import { useFetch } from "@softbind/hook-use-fetch";

const PageTemplate = () => {
  const { loading, result, cancel, invoke } = useFetch('http://api.im?query=Dog')

  if (loading) {
    return (
      <span>Loading...</span>
    )
  }

  return (
    <div>
      {result ? JSON.stringify(result), null, 2) : null}
      {loading && <button onClick={invoke}>Refresh</button>}
      {!loading && <button onClick={cancel}>Cancel</button>}
    </div>
  );
};
```

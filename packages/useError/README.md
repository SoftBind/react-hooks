# useTitle

## Installation

`npm i @softbind/hook-use-error --save`

## API

### `useError()`

```js
import React, { useEffect } from "react";
import { useError } from "@softbind/hook-use-error";

class ErrorBoundary extends React.Component {
  state = { hasError: false }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

const Fetcher = ({ url }) => {
  const [dispatchError] = useError()

  useEffect(() => {
    fetch(url).catch(dispatchError)
  }, [])
  
  return (
	<span>Loading...</span>
  )
}

const App = ({ children }) => (
  <ErrorBoundary>
    <Fetcher url="https://google.pl" />
  </ErrorBoundary>
);
```

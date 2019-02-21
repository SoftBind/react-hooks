# useTitle

## Installation

`npm i @softbind/hook-use-title --save`

## API

### `useTitle(text)`

#### Arguments

- `text: String`: is a value that you would to see in tab title.

```js
import { useTitle } from "@softbind/hook-use-title";

const PageTemplate = ({ title, children }) => {
  useTitle(title)

  return (
    <div>
      <h1>{title}</h1> {children}
    </div>
  );
};
```

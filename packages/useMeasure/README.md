# useMeasure

## Installation

`npm i @softbind/hook-use-measure --save`

## API

### `useMeasure(ref, types)`

#### Arguments

- `ref: HTMLElement`: ref is a HTMLElement returned from useRef hook.
- `types: string | Array<string>`: types of info that you would like to fetch from dom. Available types: `['client', 'offset', 'scroll', 'bounds', 'margin']`

#### Returns

- `measure: Object`: Current measure info based on provided `types` arg.

```js
import { useMeasure } from "@softbind/react-hooks";

const MyComponent = () => {
  const ref = useRef(null);
  const { bounds } = useMeasure(ref, "bounds");

  console.log(bounds);

  return <div ref={ref}>Test</div>;
};
```

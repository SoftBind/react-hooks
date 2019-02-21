# React Hooks

## Installation

`npm i @softbind/hook-use-idle --save`

## API

### `useIdle(ref, types)`

#### Arguments

- `opt: Object`: opt is a Object that you can pass. All props is available from [activity-detector](https://github.com/tuenti/activity-detector#advanced-options)

#### Returns

- `idle: Boolean`: Value that indicate when user is idle.

```js
import { useIdle } from "@softbind/react-hooks";

const MyComponent = () => {
  const idle = useIdle({ timeToIdle: 1000 });

  return <div>Idle: {idle.toString()}</div>;
};
```

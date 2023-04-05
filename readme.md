# Hex ObjectId

A fast and small module that generates a random ObjectId as a hex string.

Should be compatible with the MongoDB ObjectId specification.

Throws if `Date.now()` returns a date after Feb 7th, 2106 06:28:15 UTC.

## Installation

```js
npm install --save hex-object-id
```

## Usage

```js
import hexObjectId from 'hex-object-id'

console.log(hexObjectId())
//=> 642cf99413ea465c2aaba3a3
```

## API

### `hexObjectId()`

- returns `string` - a 24 character hex string representing a random ObjectId

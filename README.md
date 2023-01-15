# array-item-ttl

Auto remove item from array with specific time.

## Initialize

```js
import arrayItemTTL from 'array-item-ttl'
const arr = new arrayItemTTL()
```

## Example

```js
import arrayItemTTL from 'array-item-ttl'
const arr = new arrayItemTTL()

arr.push('abc', 3000) // push an item with 3000ms time to life
arr.push('def', 2000)

setInterval(() => {
    console.log(arr.list)
}, 1000)
```

Output:

```bash
[ 'abc', 'def' ]
[ 'abc' ]
[]
```

## Advaced Example

Setting a default time to life

```js
import arrayItemTTL from 'array-item-ttl'
const arr = new arrayItemTTL(3000) // default time to life

arr.push('abc') // push an item with 3000ms ttl
arr.push('abc', 5000) // push an item with 5000ms ttl
```

If pushing the same item multiple times, ttl will be recount and updated by the last one.

```js
arr.push('abc', 5000) // initially set ttl to 5000ms
arr.push('abc', 3000) // change ttl to 3000ms
arr.push('abc', 2000) // change ttl to 2000ms

setInterval(() => {
    console.log(arr.list)
}, 1000)
```

Output:

```bash
[ 'abc' ]
[ 'abc' ]
[]
```

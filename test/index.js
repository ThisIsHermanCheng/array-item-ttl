import arrayItemTTL from '../index.js'
import tap from 'tap'

const delay = time => new Promise(res => setTimeout(res, time));

tap.test('should auto remove item after a default timeout (5s)', async function (t) {
    const arr = new arrayItemTTL()
    arr.push('abc')
    await delay(5000);
    t.equal(arr.list.length, 0)
    t.end()
})

tap.test('should auto remove item after a specified default time', async function (t) {
    const arr = new arrayItemTTL(300)
    arr.push('abc')
    await delay(300);
    t.equal(arr.list.length, 0)
    t.end()
})

tap.test('should auto remove item after a time for a specific item', async function (t) {
    const arr = new arrayItemTTL()
    arr.push('abc', 300)
    await delay(300);
    t.equal(arr.list.length, 0)
    t.end()
})

tap.test('should recount the timer using the new one if the same item pushed again', async function (t) {
    const arr = new arrayItemTTL()
    arr.push('abc', 1000)
    arr.push('abc', 2000)
    await delay(1000);
    t.equal(arr.list.length, 1)
    await delay(2000);
    t.equal(arr.list.length, 0)
    t.end()
})

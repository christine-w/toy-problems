/*
Design a cache with string keys and string values such that the N most recently
written or read keys are stored.

Skeleton:
  const cache = new Cache(3);  // N -- in practice, support up to N=1000
  cache.save('a', 'A');
  cache.save('b', 'B');
  cache.save('c', 'C');
  cache.get('c'); // => 'C'
  cache.save('d', 'D') // a is evicted; b, c, d remain in cache
  cache.get('b'); // => 'B'
  cache.get('c'); // => 'C'
  cache.save('e', 'E'); // d is evicted since b and c were both read more recently
  cache.save('f', 'F'); // b is evicted
  cache.get('a'); // => null
*/

class Cache {
  constructor(limit) {
    this.limit = limit;
    this.storage = {};
    this.size = 0;
  }

  // O(n) - linear time save from searching cache for oldest item
  save(key, value) {
    const oldestItem = { key: null, age: 0 };
    for (let k in this.storage) {
      this.storage[k].age++;
      if (this.storage[k].age > oldestItem.age) {
        oldestItem.key = k;
        oldestItem.age = this.storage[k].age;
      }
    }
    if (this.size < this.limit) {
      this.size++;
    } else {
      delete this.storage[oldestItem.key];
    }
    this.storage[key] = { value: value, age: 0 };
  }

  // O(n) - linear time retrieve from updating age of each item in cache
  get(key) {
    if (!this.storage.hasOwnProperty(key)) {
      return null;
    }
    for (let k in this.storage) {
      if (k === key) {
        this.storage[k].age = 0;
      } else {
        this.storage[k].age++;
      }
    }
    return this.storage[key].value;
  }
}

const cache = new Cache(3);  // N -- in practice, support up to N=1000
console.log(cache.storage);
cache.save('a', 'A'); console.log(cache.storage);
cache.save('b', 'B'); console.log(cache.storage);
cache.save('c', 'C'); console.log(cache.storage);
console.log(cache.get('c')); // => 'C'
cache.save('d', 'D'); console.log(cache.storage); // a is evicted; b, c, d remain in cache
console.log(cache.get('b')); // => 'B'
console.log(cache.get('c')); // => 'C'
cache.save('e', 'E'); console.log(cache.storage); // d is evicted since b and c were both read more recently
cache.save('f', 'F'); console.log(cache.storage); // b is evicted
console.log(cache.get('a')); // => null

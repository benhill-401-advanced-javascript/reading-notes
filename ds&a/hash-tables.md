# Hash Tables

[md5 Hash Generator](http://www.miraclesalad.com/webtools/md5.php)

## What is a Hashtable?

- _Hash:_ A hash is the result of some algorithm taking an incoming string and converting it into a value that could be used for either security or some other purpose. A hashtable is used to determine the index of the array.
- _Buckets:_ are what is contained in each index of the array of the hastable. Each index is a bucket. An index could potentially contain multiple key/value pairs if a collision occurs.
- _Collisions:_ A collision is what happens when more than one key gets hashed to the same location of the hastable. [Check out the wiki collision resolution](https://en.wikipedia.org/wiki/Hash_table#Collision_resolution)

## Why do we use them?

## What are they?

- data structure that utilize key value pairs; every **Node** or **Bucket** has both a key, and a value
- the basic idea of a hashtable is the ability to store the key into this data structure, and quickly retrieve the value
- this is done through a _hash_
- a hash is the ability to encode the key that will eventually map to a specific location in the data structure that we can look at directly to retrieve the value
- uses **_hash maps_** that take advantage of an array's O(1) read access
- a hash map uses a **_hash function_** to place each item at a precise index location, based off its key.
- the hash function takes a key and returns an integer
- we use the integer to determine where the key/value pair should be placed in the array
- the hash code is calculated in **_constant time (O(1))_** and writing

## Structure

### Hashing

- a hash code turns a key into an integer. **_It's very important that hash codes are deterministic: their output is determined only by their input._**
- Hash codes should never have randomness to them. The same key should always produce the same hash code.

### Creating a Hash

- A hashtable traditionally is created from an array.
- After creating array of appropriate size (a good size is 1024), write logic to turn that key into a numeric value
- Possible suggestion:
  - add or multiply all the ASCII values together
  - Multiply it by a prime number such as 599
  - Use modulo to get the remainder of the result, when divided by the total size of the array
  - Insert into the array at the index

### Collisions

- A collision occurs when more than one key hashes to the same index in an array.
  ![collision resolution wiki](img/hash1.png)
- Collisions are resolved by changing the initial state of the buckets. Instead of starting them all as **null**, we can initialize a **LinkedList** in each one.
- Now if two keys resolve to the same index in the array their key/value pairs can be stored as a node in a linked list.
- Each index in the array is called a **_"bucket" because it can store multiple key/value pairs_**

## Internal Methods

### add()

- send the key to _getHash()_
- once you determine the index of where it should be placed, go to that index
- check if something exists at that index already, if it doesn't, add it with the key/value pair.
- if something does exist, add the new key/value pair to the data structure within the bucket

### find()

- takes in a key, gets the _hash()_, and indexes location specified. Once the index location is found in the array, the algorithm iterates through the bucket to see if the key exists and return the value

### contains()

- will accept a key, return a boolean on of the key exists inside the hashtable. Have _contains()_ call the _getHash()_ method and check the _hashtable_ if the key exists in the table given the index returned.

### getHash()

- Accepts a key as a string, conducts the hash, and then return the index of the array where the key/value pair should be placed

- [What is a Hastable?](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-30/resources/Hashtables.html)
- [Tutorial video](https://www.youtube.com/watch?v=MfhjkfocRR0)
- [Basics of Hash Tables](https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/)
- [Hash table wiki](https://en.wikipedia.org/wiki/Hash_table)

[Table of Contents](../README.md)

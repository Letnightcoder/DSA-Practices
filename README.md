## What is array
- Array is an collection of iteams
- Array can hold multiple values
- Most used data structure
- In built support in almost all programming language

---

## What is Stack
- Stack is data structure that can store many elements
- Stack follows LIFO - Last in First out
- Last item added to the stack is the first one to be removed.

### Stack key operations
- Push: Adds an element to the top of the stack
- Pop: Removes and returns the top element of the stack
- Peek: Returns the top element without removing it
- isEmpty: Checks if the stack is empty
- Size: Returns the number of elements in the stack 

---

## What is a Queue
- Queue in general is a waiting line
- Queue data structure can store many elements
- Queue follows First in First out principle (FIFO)

### Queue key operations
- Enqueue: Add an element to the end of the queue.
- Dequeue: Remove an element from the front of the queue.
- Peek: Get the element at the front of the queue without removing it.
- isEmpty: Checks if the queue is empty.
- Size: Returns the number of elements in the queue.

---

### Link List key operations
- Insertion
 - At the beginning
 - At the end
 - At the specific position
- Deletion
 - By value
 - By position
- Traversal: visiting all nodes sequentially, one by one from start to end.
- Search: Find if a node with a specific value.
- Length: Number of nodes in a Linked List.

---

## Hash Function
- A hash function is a special type of function
- It takes some value (key) as input
- It converts Key into a fixed-size numerical value called a hash code

### Hash Function Attributes
- Deterministic: The same input always produces the same output.
- Fast: It should compute the hash value quickly.
- Uniform Distribution: It aims to distribute inputs evenly across possible outputs to minimize collisions.
- Collisions: As less collision as possible.

## What is Hash Table
- A Hash Table is a data structure that stores key-value pairs in an efficient manner.
- It uses a hashing function to compute an index into an array, where the desired value can be found

### Hash Table Implementation
- We will create our implementation
- Array size of 50
- We will support following operations
 - Set: Adds a new key-value pair to the hash table
 - Get: Retrieves the value associated with a given key

---

## What is a Set
- Data Structure that stores a collection of Unique Elements
- Sets do not allow duplicate values
- Set data structure has in build support in JS
- Sets come from Mathamatics
 - A = {1,2,3,3,4} => {1,2,3,4}

### Set Characteristics

- Unique Elements: A set automatically removes duplicate values.
 - Unlike arrays, Sets automatically eliminate duplicate values
- Unordered: The elements in a set are not stored in a specific sequence.
- Fast Lookups (Search): Sets are optimized for checking the presence of an element.

### Set Operations
- Initialization
- Add
- Has
- Delete
- Iterating over all elements
- Clearing a set

### Use cases of Set
- Removing Duplicates from an Array
- Fast Membership Testing: has function
- Joining Two Sets (Union): Using spread operator
- Finding Intersection: Finding common items
- Difference between 2 Sets
class Stack {
  #items = []; // Private variable to store the items of the stack (Incapsulation)
  constructor() {
    //   this.items = []; // Public variable to access the items of the stack
  }

  push(element) {
    this.#items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("No items to pop");
    }
    return this.#items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.#items[this.#items.length - 1];
  }

  isEmpty() {
    return this.#items.length === 0;
  }

  size() {
    return this.#items.length;
  }
}

export default Stack;

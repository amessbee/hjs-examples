# Exploring `harden()` in JavaScript: Simple to Advanced Examples

In the ever-evolving landscape of JavaScript, security and immutability are crucial aspects that developers must consider. One of the lesser-known but powerful tools in this regard is the `harden()` function. The `harden()` function, provided by the **SES** package, is a powerful tool for making JavaScript objects deeply immutable. In this guide, we'll explore its usage through a range of examples, starting with simple cases and progressing to more complex scenarios.

## What is `harden()`?

`harden()` is a function from the SES package that makes an object immutable, preventing any further modifications to it. Formally, it provides a shorthand for reliably freezing the transitive properties and prototypes of other objects, such that the API surface of these objects are tamper-proof when shared between otherwise isolated programs. This immutability extends not only to the object's top-level properties but also to all nested properties, ensuring a comprehensive freeze. The primary purpose of harden() is to protect objects from accidental or malicious changes, providing a robust mechanism for maintaining data integrity and security.
Unlike the native `Object.freeze()` method, which only freezes the top-level properties of an object, `harden()` recursively freezes all properties, making it an excellent choice for creating deeply immutable objects.

[See Complete Article with Code here.](https://medium.com/@mudassir.shabbir/exploring-harden-in-javascript-simple-to-advanced-examples-87dba3a37990)


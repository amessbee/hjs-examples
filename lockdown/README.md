# Understanding lockdown() in JavaScript

## Overview

In the context of Secure ECMAScript (SES), lockdown() is a function used to enhance the security of JavaScript environments by freezing the global environment, making it immutable, and preventing unintended modifications. This ensures that any executed code cannot tamper with the built-in objects, functions, or environment, which is particularly useful for running untrusted code safely.

## Key Features of lockdown()

- Immutable Globals:lockdown() freezes all intrinsic objects and functions (such as Object, Array, Function.prototype, etc.) to prevent any modifications to them. This means their properties cannot be changed, and new properties cannot be added or removed.
- Prevent Prototype Pollution: By freezing prototypes, lockdown() prevents prototype pollution attacks, where an attacker could potentially change the behavior of built-in objects globally.
- Secure Execution Environment: It provides a way to execute potentially unsafe code safely by ensuring that it cannot interfere with or modify the host environment.
- Compatibility and Extensibility: SES and lockdown() are designed to be compatible with the standard JavaScript environment while allowing developers to safely extend functionality through compartments.

[See Complete Article with code snippets.](https://medium.com/@mudassir.shabbir/understanding-lockdown-in-javascript-ff263b6e7d8e)


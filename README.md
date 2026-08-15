# Debugging Demo

This repository contains a deliberately broken Node.js app so you can reproduce a failing test suite and debug it in VS Code.

## Quick start

```bash
cd nodeapp
npm install
npm test
```

The test suite fails because the shipping logic in `src/cart.js` is incorrect. Open the file in VS Code, set a breakpoint, and use the included debug configuration to step through the failing calculation.

## VS Code debugging

1. Open the repo in VS Code.
2. Choose the "Debug nodeapp tests" configuration.
3. Set a breakpoint in `src/cart.js` on the `if (subtotal >= 100)` condition.
4. Start debugging and inspect the value of `subtotal` and the return path.

## CI/CD

The workflow in `.github/workflows/nodeapp-ci.yml` runs the same tests automatically on push and pull request.

# 🔄 React Component Lifecycle

---

## ✅ 1. Explain the Need and Benefits of Component Lifecycle

The component lifecycle in React defines the series of methods that are invoked at different stages of a component’s life in the DOM (mounting, updating, unmounting).

### Need:
- To control behavior at specific stages of a component’s existence.
- To perform tasks like data fetching, DOM updates, and cleanup efficiently.

### Benefits:
- Enables clean and efficient UI rendering.
- Improves performance with proper resource management.
- Helps manage side effects like API calls and event listeners.
- Makes debugging and maintenance easier by controlling execution flow.

---

## 🧩 2. Identify Various Lifecycle Hook Methods

React class components include several lifecycle methods, grouped by phase:

### Mounting:
- `constructor()`
- `getDerivedStateFromProps()`
- `render()`
- `componentDidMount()`

### Updating:
- `getDerivedStateFromProps()`
- `shouldComponentUpdate()`
- `render()`
- `componentDidUpdate()`

### Unmounting:
- `componentWillUnmount()`

---

## 🔁 3. List the Sequence of Steps in Rendering a Component

### Component Mounting Sequence:
1. `constructor()`
2. `getDerivedStateFromProps()`
3. `render()`
4. `componentDidMount()`

### Component Updating Sequence:
1. `getDerivedStateFromProps()`
2. `shouldComponentUpdate()`
3. `render()`
4. `componentDidUpdate()`

### Component Unmounting:
1. `componentWillUnmount()`

---

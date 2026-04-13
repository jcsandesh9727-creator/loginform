# Login Form Testing Project

A complete React testing project demonstrating user interaction tests using @testing-library/user-event and Jest mock functions.

## 📋 Assignment Overview

This project fulfills the requirements for the **Testing User Interactions & Events** assignment, which evaluates:

- ✅ Simulating real user behaviour (typing + clicking)
- ✅ Using userEvent correctly (with await)
- ✅ Using jest.fn() to mock handlers
- ✅ Asserting correct function calls and validation behaviour
- ✅ Understanding the difference between fireEvent and userEvent

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Run Tests

```bash
npm test
```

### Run Tests in Watch Mode

```bash
npm run test:watch
```

### Generate Coverage Report

```bash
npm run test:coverage
```

## 📁 Project Structure

```
login-form-testing-project/
├── src/
│   ├── LoginForm.jsx           # Main login form component
│   ├── LoginForm.test.jsx      # Comprehensive interaction tests
│   ├── SearchBar.jsx           # Example: Search component
│   ├── SearchBar.test.jsx      # Search component tests
│   ├── ToggleButton.jsx        # Example: Toggle component
│   └── ToggleButton.test.jsx   # Toggle component tests
├── package.json
├── jest.config.js
├── jest.setup.js
├── .babelrc
└── README.md
```

## ✅ Test Coverage

### LoginForm.test.jsx

The test suite includes:

1. **Typing Test - Email Field**
   - Simulates typing a valid email
   - Asserts the input contains the correct value

2. **Typing Test - Password Field**
   - Simulates typing a valid password
   - Asserts the input contains the correct value

3. **Happy Path Submission** ⭐
   - Types valid email and password
   - Clicks submit button
   - Asserts mock handler was called exactly once
   - Asserts handler received correct object shape `{ email, password }`

4. **Validation - Empty Fields**
   - Clicks submit without filling fields
   - Asserts error message appears (role="alert")
   - Asserts handler was NOT called

5. **Validation - Email Only**
   - Fills only email field
   - Clicks submit
   - Asserts error appears and handler not called

6. **Validation - Password Only**
   - Fills only password field
   - Clicks submit
   - Asserts error appears and handler not called

7. **Additional Tests**
   - Renders heading correctly
   - No error message on initial render
   - Handles multiple submissions with different data

## 🎯 Key Concepts Demonstrated

### 1. userEvent.setup()

```javascript
const user = userEvent.setup();
```

Called inside each test to create a clean, isolated user instance.

### 2. Simulating Typing

```javascript
await user.type(screen.getByLabelText(/email/i), 'alice@example.com');
```

Fires full keyboard event sequence for each character.

### 3. Simulating Clicks

```javascript
await user.click(screen.getByRole('button', { name: /login/i }));
```

Fires complete mouse event sequence (pointerover, mousedown, focus, mouseup, click).

### 4. Jest Mock Functions

```javascript
const mockSubmit = jest.fn();

// Assert it was called
expect(mockSubmit).toHaveBeenCalled();

// Assert call count
expect(mockSubmit).toHaveBeenCalledTimes(1);

// Assert arguments
expect(mockSubmit).toHaveBeenCalledWith({
  email: 'alice@example.com',
  password: 'supersecret',
});
```

### 5. Proper Async Handling

All userEvent interactions return Promises and must be awaited:

```javascript
it('does something when the user interacts', async () => {
  const user = userEvent.setup();
  render(<MyComponent />);

  await user.type(...);  // ← Must await
  await user.click(...); // ← Must await
});
```

## 📊 fireEvent vs userEvent

### The Critical Difference

**Statement:** "fireEvent.click() and userEvent.click() do the same thing."

**Reality:** ❌ This is incorrect.

### Event Sequence Comparison

| Action | fireEvent | userEvent |
|--------|-----------|-----------|
| **Click** | Fires: `click` | Fires: `pointerover`, `pointerenter`, `mouseover`, `mousedown`, `focus`, `mouseup`, `click` |
| **Type** | Fires: `change` | Fires: `keydown`, `keypress`, `input`, `change`, `keyup` (per character) |
| **Accuracy** | Single event in isolation | Complete browser event sequence |

### Real-World Bug Example

Consider a form with a focus validation:

```javascript
const FormInput = () => {
  const [touched, setTouched] = useState(false);
  
  return (
    <input
      onFocus={() => setTouched(true)}
      onBlur={() => validateIfTouched()}
    />
  );
};
```

**With fireEvent:**
```javascript
fireEvent.click(input); // Only fires 'click', skips 'focus'
// Bug: touched state never sets to true
// Test passes even though feature is broken
```

**With userEvent:**
```javascript
await user.click(input); // Fires full sequence including 'focus'
// touched state correctly updates
// Test accurately catches the real behavior
```

### Why This Matters

- Real users don't fire single events — browsers fire sequences
- Components often rely on event order (focus before click, keydown before input)
- userEvent catches interaction bugs that fireEvent silently misses
- Tests with userEvent more accurately reflect production behavior

## 🔍 Additional Examples

The project includes two more example components:

### SearchBar
Demonstrates controlled input with conditional rendering based on state.

### ToggleButton
Demonstrates state toggling through multiple clicks.

## 📚 Resources

- [user-event Official Documentation](https://testing-library.com/docs/user-event/intro)
- [userEvent.setup() — Why and How](https://testing-library.com/docs/user-event/setup)
- [Jest Mock Functions](https://jestjs.io/docs/mock-functions)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## ✨ Best Practices Implemented

1. ✅ Always await userEvent calls
2. ✅ Call userEvent.setup() inside each test
3. ✅ Use meaningful test descriptions
4. ✅ Test user behavior, not implementation details
5. ✅ Use semantic queries (getByRole, getByLabelText)
6. ✅ Assert both positive and negative cases
7. ✅ Verify mock function arguments with toHaveBeenCalledWith
8. ✅ Keep tests focused and isolated

## 🎓 Learning Outcomes

After working through this project, you will understand:

- How to simulate realistic user interactions in tests
- The importance of full event sequences vs single events
- How to use Jest mock functions to verify behavior
- How to test form validation logic
- How to write maintainable, user-focused tests
- The difference between testing rendering and testing behavior

## 📝 Notes

- All tests use `userEvent`, not `fireEvent`
- Every `userEvent` call is properly awaited
- `userEvent.setup()` is called inside each test
- No `screen.debug()` statements in final code
- Tests pass successfully with `npm test`

---

**Project Status:** ✅ Ready for submission

All required test scenarios are implemented and passing.

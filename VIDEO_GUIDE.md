# Video Explanation Guide

## 📹 Video Recording Checklist (~5 minutes)

### Part 1: Introduction (30 seconds)
- State your name and assignment title
- Brief overview: "I've created comprehensive interaction tests for a LoginForm component"

### Part 2: Demo - Running Tests (1.5 minutes)

1. **Navigate to project directory**
   ```bash
   cd login-form-testing-project
   ```

2. **Install dependencies** (if needed)
   ```bash
   npm install
   ```

3. **Run tests**
   ```bash
   npm test
   ```

4. **Show test output**
   - Point out all tests passing (green checkmarks)
   - Count the test cases (9 total for LoginForm)
   - Highlight 0 failures

5. **Optional: Run with coverage**
   ```bash
   npm run test:coverage
   ```

### Part 3: Code Walkthrough (2 minutes)

Open `src/LoginForm.test.jsx` and explain:

1. **Test Setup**
   ```javascript
   const user = userEvent.setup();
   ```
   - Explain: "I call userEvent.setup() inside each test for isolation"

2. **Typing Test**
   ```javascript
   await user.type(screen.getByLabelText(/email/i), 'alice@example.com');
   ```
   - Explain: "This simulates a real user typing each character"
   - Mention: "Notice the await keyword — userEvent returns promises"

3. **Click Test**
   ```javascript
   await user.click(screen.getByRole('button', { name: /login/i }));
   ```
   - Explain: "This simulates the full click event sequence"

4. **Mock Function**
   ```javascript
   const mockSubmit = jest.fn();
   expect(mockSubmit).toHaveBeenCalledWith({
     email: 'alice@example.com',
     password: 'supersecret',
   });
   ```
   - Explain: "Jest mock functions let me verify the handler was called with correct data"

5. **Validation Test**
   ```javascript
   expect(screen.getByRole('alert')).toBeInTheDocument();
   expect(mockSubmit).not.toHaveBeenCalled();
   ```
   - Explain: "When validation fails, error appears and handler doesn't fire"

### Part 4: Scenario Question (1.5 minutes)

**Question:** "fireEvent.click() and userEvent.click() do the same thing. There's no real difference, so using userEvent is unnecessary."

**Your Answer Should Cover:**

1. **Why the statement is incorrect:**
   - "This statement is incorrect because they fire completely different event sequences"

2. **Event sequence difference:**
   - "fireEvent.click() fires only a single 'click' event"
   - "userEvent.click() fires the full sequence: pointerover, pointerenter, mouseover, mousedown, focus, mouseup, and THEN click"
   - "This matches what real browsers do when users click"

3. **Realistic bug example:**
   ```javascript
   // Component that relies on focus event
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
   
   - "If I test this with fireEvent.click(input), it only fires 'click' — it skips 'focus'"
   - "The touched state never gets set to true"
   - "My test would pass, but the feature is actually broken"
   - "With userEvent.click(), the focus event fires correctly, touched updates, and my test catches the real behavior"

4. **Why it matters:**
   - "Many components rely on event order — focus before click, keydown before input"
   - "userEvent catches interaction bugs that fireEvent silently misses"
   - "It gives us higher confidence that features actually work for real users"

### Part 5: Closing (30 seconds)
- "All my tests use userEvent, not fireEvent"
- "Every interaction is properly awaited"
- "Mock functions verify both that handlers are called AND what data they receive"
- "This approach tests behavior from a user's perspective"

---

## 🎤 Speaking Tips

1. **Be clear and confident**
2. **Show your face on camera**
3. **Screen record your terminal and code editor**
4. **Speak at a moderate pace**
5. **Use concrete examples**
6. **Don't just read code — explain what it does**

## ✅ Final Checklist Before Recording

- [ ] All tests passing when you run `npm test`
- [ ] Code editor open with test file visible
- [ ] Terminal ready to run commands
- [ ] Camera positioned so your face is visible
- [ ] Good lighting and audio
- [ ] Practice your explanation of fireEvent vs userEvent

---

## 📤 After Recording

1. Upload to Google Drive
2. Set sharing to: **"Anyone with the link can view"**
3. Test the link in an incognito window
4. Submit the link in the assignment form

Good luck! 🚀

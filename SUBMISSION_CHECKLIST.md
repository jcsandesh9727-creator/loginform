# Assignment Submission Checklist

## ✅ Before You Submit

### Pull Request Requirements

- [ ] Created a new branch for your work
- [ ] Added `LoginForm.test.jsx` to your repository
- [ ] All tests pass when running `npm test`
- [ ] Used `userEvent`, not `fireEvent`
- [ ] Every `userEvent` call is awaited
- [ ] `userEvent.setup()` called inside each test
- [ ] No `screen.debug()` statements left in code
- [ ] Created a Pull Request to your main branch
- [ ] PR is publicly accessible
- [ ] PR description includes test summary

### Video Requirements

- [ ] Video is approximately 5 minutes long
- [ ] Shows terminal running `npm test` successfully
- [ ] Walks through test file code
- [ ] Your face is clearly visible
- [ ] Answers the scenario question about fireEvent vs userEvent
- [ ] Provides realistic bug example
- [ ] Uploaded to Google Drive
- [ ] Sharing set to "Anyone with the link can view"
- [ ] Tested link in incognito mode

### Code Requirements

Your `LoginForm.test.jsx` must include:

- [ ] **Typing Test** - Email field
- [ ] **Typing Test** - Password field  
- [ ] **Happy Path** - Valid submission with mock assertions
- [ ] **Validation** - Empty fields error
- [ ] **Validation** - Partial fields error
- [ ] Uses `jest.fn()` for mock handler
- [ ] Uses `toHaveBeenCalled()` or `toHaveBeenCalledTimes()`
- [ ] Uses `toHaveBeenCalledWith()` with correct object shape
- [ ] All imports correct (`@testing-library/react`, `@testing-library/user-event`)

## 📋 Evaluation Criteria

### Pull Request - 5 Marks

✅ Correct usage of `userEvent.type`  
✅ Correct usage of `userEvent.click`  
✅ Correct usage of `jest.fn()`  
✅ Meaningful assertions with `toHaveBeenCalledWith`  
✅ Proper async handling (await)  
✅ All tests passing  

### Video Demonstration - 5 Marks

✅ Clear test execution demo  
✅ Strong conceptual explanation of interaction testing  
✅ Well-reasoned comparison of fireEvent vs userEvent  
✅ Realistic bug example provided  
✅ Clear understanding of why full event sequences matter  

## 🎯 Scenario Question Preparation

**Question:** "fireEvent.click() and userEvent.click() do the same thing. There's no real difference, so using userEvent is unnecessary."

**Your answer must include:**

1. ❌ Why the statement is incorrect
2. 📊 Event sequence differences (single event vs full sequence)
3. 🐛 Realistic bug example
4. ✅ Why full event simulation matters

**Example structure:**

> "This statement is incorrect because fireEvent only fires a single event, while userEvent fires the complete browser sequence. For example, fireEvent.click() only fires 'click', but userEvent.click() fires pointerover, mousedown, focus, mouseup, and then click — just like a real browser.
>
> Here's a realistic bug: Imagine a form input that validates on focus. If you test with fireEvent.click(input), it skips the focus event, so the validation never runs. Your test passes, but the feature is broken. With userEvent.click(), the focus event fires correctly, the validation runs, and your test catches the real behavior.
>
> This matters because real users trigger full event sequences, not isolated events. Components often depend on event order — like focus before click, or keydown before input. userEvent catches these interaction bugs that fireEvent would silently miss."

## 📤 Submission URLs

**GitHub PR URL:**
```
https://github.com/your-username/your-repo/pull/XX
```

**Video URL:**
```
https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing
```

## ⚠️ Common Mistakes to Avoid

- ❌ Forgetting to await userEvent calls
- ❌ Calling userEvent.setup() outside the test
- ❌ Using fireEvent instead of userEvent
- ❌ Leaving screen.debug() in final code
- ❌ Private Google Drive link (must be public)
- ❌ Not testing validation paths
- ❌ Missing toHaveBeenCalledWith() assertions
- ❌ Video not showing your face
- ❌ Not explaining the fireEvent vs userEvent difference

## ✨ Tips for Success

1. **Run tests before submitting** - Make sure everything passes
2. **Practice your video explanation** - Rehearse the scenario answer
3. **Test your links** - Open them in incognito mode
4. **Be specific in your PR description** - List what tests you added
5. **Explain, don't just read** - Show you understand WHY, not just HOW

---

**Good luck! 🚀**

You're testing behavior from a user's perspective — if your tests resemble what a real user does, you're on the right track.

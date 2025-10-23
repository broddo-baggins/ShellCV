# UX Features - ShellCV

## 🎯 User Experience Enhancements

### 1. Smart Error Handling with Command Suggestions

When users make typos, the terminal now provides helpful suggestions using a Levenshtein distance algorithm.

**Examples:**

```bash
$ resumee
zsh: command not found: resumee
Did you mean: resume?

$ skils
zsh: command not found: skils
Did you mean: skills?

$ projets
zsh: command not found: projets
Did you mean: projects?

$ hlp
zsh: command not found: hlp
Did you mean: help?

$ cls
# Works! (alias for clear)

$ cv
# Works! (alias for resume)
```

**How it works:**
- Checks if input is a partial match of any command
- Calculates edit distance (max 2 character differences)
- Shows up to 3 most similar commands
- Falls back to "Type 'help'" for completely unknown commands

---

### 2. Spam Prevention

Prevents users from spamming the same command repeatedly.

**Example:**

```bash
$ help
[shows help output]

$ help
⚠ Please wait a moment before running the same command again

# After 1 second...
$ help
[shows help output again]
```

**Configuration:**
- Rate limit: 1 command per second for identical commands
- Different commands can be run immediately
- Prevents accidental double-clicks or Enter spam

---

### 3. Text Selection & Copy

All terminal content is now fully selectable and copyable!

**CSS Implementation:**
```css
.terminal-body,
.shell-output {
    user-select: text;
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
}
```

**Use Cases:**
- Copy resume directly from terminal
- Select email/LinkedIn for sharing
- Copy command examples
- Share terminal output

---

### 4. Command History Navigation

Use arrow keys to navigate through previous commands.

**Usage:**
- `↑` (Up Arrow): Previous command
- `↓` (Down Arrow): Next command
- Maintains full session history
- Preserves exact command as typed

---

### 5. Tab Auto-Complete

Press Tab to auto-complete partial commands.

**Examples:**

```bash
$ res[TAB]
$ resume

$ ski[TAB]
$ skills

$ h[TAB]
[shows: help  home]
```

**Features:**
- Single match: Auto-completes immediately
- Multiple matches: Shows all options
- Case-insensitive matching

---

## 🔧 Technical Implementation

### Command Similarity Detection

```javascript
levenshteinDistance(a, b) {
    // Calculate edit distance between strings
    // Returns number of single-character edits needed
    // Used to find typos and suggest corrections
}

findSimilarCommands(input, commands) {
    // Check for prefix matches first
    // Then check edit distance (max 2 differences)
    // Return top 3 suggestions
}
```

### Spam Prevention

```javascript
// Track last command and timestamp
this.lastCommand = '';
this.lastCommandTime = 0;

// Check before executing
const now = Date.now();
if (this.lastCommand === command && now - this.lastCommandTime < 1000) {
    // Show warning, don't execute
}
```

---

## 📊 Available Commands

```bash
help      # Show all available commands
resume    # Display full resume
cv        # Alias for resume
skills    # Show technical skills
projects  # View project portfolio
contact   # Get contact information
about     # Learn about this shell
home      # Return to home page
clear     # Clear screen
cls       # Alias for clear
```

---

## 🎨 Color Scheme (ZSH-inspired)

- **Prompts**: Magenta path, cyan symbol
- **Success**: Green (#98c379)
- **Errors**: Red (#e06c75)
- **Warnings**: Yellow (#e5c07b)
- **Comments**: Gray (#5c6370)
- **Links**: Light blue (#61afef)

---

## 🚀 Performance

- **Typing Animation**: 3ms per character
- **Command Execution**: Instant (async/await)
- **Spam Protection**: 1 second cooldown
- **Suggestion Algorithm**: O(n*m) Levenshtein
- **History**: Unlimited storage (session-based)

---

## 🔒 Privacy

- Phone number: "Available on request" in resume
- Phone number: Removed from home page
- All data served locally (no analytics)
- No tracking or cookies
- User-agent detection for curl (functionality only)

---

## 📱 Mobile Responsive

- Touch-friendly input
- Auto-focus on tap
- Optimized font sizes
- Compact layout fits single screen
- Scrollable for long content

---

## 🧪 Testing Checklist

- [ ] Test command suggestions (typos)
- [ ] Test spam prevention (rapid commands)
- [ ] Test text selection (copy/paste)
- [ ] Test command history (arrows)
- [ ] Test tab completion
- [ ] Test on mobile devices
- [ ] Test curl functionality
- [ ] Verify phone number changes
- [ ] Check resume content accuracy
- [ ] Validate all links work

---

Built with vanilla JavaScript - no frameworks, no dependencies.


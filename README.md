# React + Tailwind Dark Mode System

A ready-to-use **Dark/Light mode system** built with **Vite + React + Tailwind CSS v4**.  
No more repeating setup every time — clone it once, customize the toggle UI, and go!

---

## What It Does

- Pre-configured **dark/light mode** logic with localStorage memory  
- Automatic system theme detection (`auto` mode)  
- Tailwind **class-based** dark mode (`dark:` prefix ready)  
- Easily customizable UI — just change icons, buttons, or styles  
- Monochrome gradient dark mode + creamy off-white light mode  

---

## Quick Start

```bash
git clone https://github.com/codeSmith-006/theme-toggle-reactjs
cd theme-toggle-reactjs
npm install
npm run dev
```

Then open `http://localhost:5173`

That's it — everything (Vite, React, Tailwind, dark mode logic) is already configured.

---

## Folder Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   └── ThemeToggle.jsx
├── hooks/
│   └── useTheme.js
├── Theme/
│   └── ThemeProvider.jsx
|   └── ThemeToggle.jsx
├── App.jsx
├── index.css
└── main.jsx
```

---

## How to Customize

1. Edit `src/components/ThemeToggle.jsx`
2. Replace the button or icon with your own design
3. The theme logic will still work automatically

**Example:**

```jsx
<button onClick={() => setTheme("dark")}>🌙 Dark</button>
<button onClick={() => setTheme("light")}>☀️ Light</button>
<button onClick={() => setTheme("auto")}>💻 Auto</button>
```

---

## Theme Colors

| Mode  | Background                          | Text      |
|-------|-------------------------------------|-----------|
| Light | `#fdfcf9` (creamy white)           | `#1a1a1a` |
| Dark  | gradient `#0f0f0f` → `#1a1a1a`     | `#e5e5e5` |

---

## How It Works

```
User Interaction
      ↓
localStorage (persist choice)
      ↓
useTheme Hook (manage state)
      ↓
Theme State (dark/light/auto)
      ↓
Tailwind dark: classes
      ↓
Visual Theme Applied
```

**Flow breakdown:**
1. **User selects theme** → Stored in `localStorage`
2. **`useTheme` hook** → Reads preference & system theme
3. **Theme state updates** → Applies `dark` class to `<html>`
4. **Tailwind CSS** → Automatically styles with `dark:` variants
5. **Persists across sessions** → Always remembers user choice

---

## Notes

- No need for Docker or manual setup
- Just Node.js + npm
- Works out of the box with Tailwind's dark mode classes

---

**Made with using Vite, React, and Tailwind CSS v4**

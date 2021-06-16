# Tailwind darkmode example

Just a simple example for future reference.

[Documentation](https://tailwindcss.com/docs/dark-mode)

Enable dark mode by changing the `tailwind.config.js` line from:
```js
darkMode: false,
```
to
```js
darkMode: "class",
```

## From the documentation:
```js
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')
```
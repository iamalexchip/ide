# IDE
My personal Theia idea

## Key bindings
Copy `bindings/keymaps.json` to the folder `/home/${USER}/.thea` .
Run the contents of `bindings/capture.min.js` in the console of the tab you are using. This will allow you capture some bindings used by vscode which have conflicts with the browser.

**NB:** This only works when in full screen mode on chrome.

| Binding | Action | keymap.json |
|----|----|----|
| `ctrl + n` | New file | ✓ |
| `ctrl + o` | Open... | ✓ |
| `ctrl + w` | Close main area tab | ✓ |
| `ctrl + pageup` | Switch to previous tab | ✓ |
| `ctrl + pageup` | Switch to next tab  | ✓ |
| `F12` | Go to definition | ✓ |
| `ctrl + shift + t` | Reopen closed editor | ✗ (Theia doesn't have a command for this yet) |

## Todo

- Create extension for capturing key bindings

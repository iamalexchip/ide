# IDE
My personal Theia idea

## Hacks

**Capture**  `ctrl + w`
This only works when in full screen mode on chrome.
```js
window.addEventListener('keydown', function (e) {
	if (e.ctrlKey && e.keyCode == 87) {
		e.preventDefault();
	}
});
```

## Todo

- Create extension for capturing `ctrl+ w`
- Capture `ctrl + t`
- Recent extension (Folder and workspace)

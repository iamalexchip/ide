window.addEventListener('keydown', function (e) {
    // ctrl + w
    if (e.ctrlKey && e.keyCode == 87) {
        e.preventDefault();
    }
    // ctrl + n
    if (e.ctrlKey && e.keyCode == 78) {
        e.preventDefault();
    }
    // ctrl + o
    if (e.ctrlKey && e.keyCode == 79) {
        e.preventDefault();
    }
    // ctrl + shift + t
    if (e.ctrlKey && e.shiftKey && e.keyCode == 84) {
        e.preventDefault();
    }
    // ctrl + PageUp
    if (e.ctrlKey && e.keyCode == 33) {
        e.preventDefault();
    }
    // ctrl + PageDown
    if (e.ctrlKey && e.keyCode == 34) {
        e.preventDefault();
    }
    // F12
    if (e.keyCode == 123) {
        e.preventDefault();
    }
});
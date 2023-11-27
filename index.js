function handleCheckboxChange() {
    const body = document.body;
    const input = document.getElementById('prompt');
    const checkbox = document.getElementById('darkModeToggle');
    
    if (checkbox.checked) {
        body.classList.add('dark-mode');
        input.classList.add('dark-mode');
    } else {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
        }

        if (input.classList.contains('dark-mode')) {
            input.classList.remove('dark-mode');
        }
    }
}
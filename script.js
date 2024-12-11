document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const image = document.getElementById('imageToToggle');

    toggleButton.addEventListener('click', () => {
        if (image.style.display === 'none') {
            image.style.display = 'block';
            toggleButton.textContent = 'Hide Image';
        } else {
            image.style.display = 'none';
            toggleButton.textContent = 'Show Image';
        }
    });
});
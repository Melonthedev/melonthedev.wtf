
// Dropdown Menu
function toggleDropdown() {
    window.scrollTo(0, 0);
    document.querySelector('#details').toggleAttribute('hidden');
}

window.onscroll = () => {
    if (window.scrollY > 0) {
        document.querySelector('#details').setAttribute('hidden', '');
    }
}
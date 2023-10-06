const input = document.querySelector('input#font-size-control');
const tex = document.querySelector('span#text');

input.addEventListener('input', () => {
    text.style.fontSize = input.value + 'px';
});
const button = document.getElementById('button');
const inputText = document.getElementById('input0');

button.addEventListener('click', () => {
    const text = inputText.value;
    console.log(text);
});
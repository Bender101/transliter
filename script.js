const button = document.getElementById('button');
const inputText = document.getElementById('input0');
const blockRu = document.getElementById('blockRu');
const blockTrans = document.getElementById('blockTrans');

button.addEventListener('click', () => {
    const text =
        inputText.value.length > 22 ? inputText.value.slice(0, 15) + '\u2026' : inputText.value;
    const blockWords = document.createElement('div');
    blockRu.appendChild(blockWords);
    blockWords.innerText = text;
});
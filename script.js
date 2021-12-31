const button = document.getElementById('button');
const inputText = document.getElementById('input0');
const blockRu = document.getElementById('blockRu');
const blockTrans = document.getElementById('blockTrans');

button.addEventListener('click', () => {
    const text = inputText.value;
    console.log(text);
    const blockWords = document.createElement('div');
    blockRu.appendChild(blockWords);
    blockWords.innerText = text;
});
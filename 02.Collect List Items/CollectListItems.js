function extractText() {
    const element = document.getElementById('items');
    const text = element.textContent;
    const resultBox = document.getElementById('result');
    resultBox.textContent = text;
}
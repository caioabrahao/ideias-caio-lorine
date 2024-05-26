document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("hover-text");
    const text = textElement.innerText;
    textElement.innerHTML = "";

    text.split("").forEach(letter => {
        const span = document.createElement("span");
        span.innerText = letter;
        textElement.appendChild(span);
    });
});
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

function rotateIdeas(){
    let textHandle = document.getElementById("ideaHandle");
    const ideasList = ["Criar uma textura de Minecraft",
        "Abrir uma empresa de Design Gráfico",
        "Criar um mod de Minecraft",
        "Compor uma música",
        "Abrir um canal no Youtube",
        "Programar uma calculadora",
        "Criar uma pokedéx online"];

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    let ideaIndex = getRandomInt(0, ideasList.length - 1);

    textHandle.textContent = ideasList[ideaIndex];
}

rotateIdeas();

// setInterval(rotateIdeas, 1000);
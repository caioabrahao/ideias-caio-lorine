let prevIndex = -1;
let ideaIndex = -1;
function rotateIdeas(){
    let textHandle = document.getElementById("ideaHandle");
    const ideasList = [
        "Criar uma textura de Minecraft",
        "Abrir uma empresa de Design Gráfico",
        "Criar um mod de Minecraft",
        "Compor uma música",
        "Abrir um canal no Youtube",
        "Programar uma calculadora",
        "Criar uma pokedéx online",
        "Platinar Deep Rock Galactic",
        "Criar uma Inteligência Artificial",
        "Fazer um mochilão na Europa",
        "Vender arte na praia",
        "Viajar o mundo de Kombi",
        "Assistir De volta para o Futuro",
        "Aprender Pixelart",
        "Criar um jogo no Unity",
        "Aprender a usar Godot",
        "Se mudar para fora do Brasil",
        "Ir caminhar de baixo da chuva"
        ];
    
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        let newIndex = Math.floor(Math.random() * (max - min + 1)) + min;
        
        while (newIndex === prevIndex) {
            newIndex = Math.floor(Math.random() * (max - min + 1)) + min;
            console.log("repeated number!");
        }
        return newIndex;
    }

    // let ideaIndex = getRandomInt(0, ideasList.length - 1);
    // prevIndex = ideaIndex;
    
    textHandle.classList.add("fadeOut");
    setTimeout(function(){
        textHandle.textContent = ideasList[ideaIndex];
        textHandle.classList.remove("fadeOut");
        textHandle.classList.add("fadeIn");
    }, 500);
        textHandle.classList.remove("fadeIn");

        if(ideaIndex < ideasList.length-1){
            ideaIndex++;
        }else{
            ideaIndex = 0;
        }
}

rotateIdeas();

setTimeout(function(){
    setInterval(rotateIdeas, 3200);
}, 500);

function updateFavicon(){
    const faviconLight = './favicon/favicon-light.ico';
    const faviconDark = './favicon/favicon-dark.ico';
    const favicon = document.getElementById("favicon");
    
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        favicon.href = faviconDark;
    } else {
        favicon.href = faviconLight;
    }
}

updateFavicon();
window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', updateFavicon);
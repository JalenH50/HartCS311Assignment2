const fortunes = [
    {message: "YES",color:"#00FF00"},
    {message: "NO",color:"#FF0000"},
    {message: "MAYBE?",color:"#008080"},
    {message: "ABSOLUTELY",color:"#FFA500"},
    {message: "PROBABLY NOT",color:"#0000FF"},
    {message: "TRY AGAIN LATER",color:"#800080"}
]

function getRandomFortune(){
    const randIndex = Math.floor(Math.random()*fortunes.length);
    return fortunes[randIndex]
}

function displayFortune(){
    const fortune = getRandomFortune();
    const fortuneElement = document.getElementById('magic-8-ball');
    if (fortuneElement){
        fortuneElement.textContent = fortune.message;
        fortuneElement.style.color = fortune.color;
    }
}

document.addEventListener('DOMContentLoaded',function(){
    const button = document.getElementById('shake');
    if (button){
        button.addEventListener('click',displayFortune);
    }
});

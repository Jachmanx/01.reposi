let btn = document.getElementById("btn");
let output = document.getElementById("output");
let quotes = 
[

    "Pohodlí je pro zbabělce a nehezké lidi",
    "Být či nebýt, to je oč tu běží",
    "Uprostřed problémů leží příležitost",
    "Když procházíš peklem, nezastavuj se",
    "Cestu si buď najdu nebo si ji udělám",
    "Buď sám tou změnou, kterou chceš vidět ve světě",
    "giving up is gay/Sensei Wu",
    "Vše, co si dokážete představit je skutečné",
    "Nespouštěj své oči z hvězd a své nohy ze země"

];

btn.addEventListener( "click", function(){
    var randomQuote = quotes[Math.floor(Math.random()* quotes.length)]
    output.innerHTML = randomQuote;
})
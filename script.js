//Globale Variabeln
const pokemonBilderQuelle = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
const pokemons = [
    { name: "Pikachu", type: "Elektro", image: `${pokemonBilderQuelle}25.png`},
    { name: "Glumanda", type: "Feuer", image: `${pokemonBilderQuelle}4.png`},
    { name: "Schiggy", type: "Wasser", image: `${pokemonBilderQuelle}7.png`},
    { name: "Biasam", type: "Pflanze", image: `${pokemonBilderQuelle}1.png`},
    { name: "Evoli", type: "Normal", image: `${pokemonBilderQuelle}133.png`},
    { name: "Digdri", type: "Boden", image: `${pokemonBilderQuelle}51.png`},
    { name: "Symsala", type: "Psycho", image: `${pokemonBilderQuelle}65.png`},
    { name: "Magneton", type: "Elektro", image: `${pokemonBilderQuelle}82.png`},
    { name: "Onix", type: "Gestein", image: `${pokemonBilderQuelle}95.png`},
    { name: "Kokowei", type: "Pflanze", image: `${pokemonBilderQuelle}103.png`},
];
//HTML-Elemente
let Titelsection = document.createElement("div");
Titelsection.id = "title-section";
Titelsection.classList.add("container");
document.body.appendChild(Titelsection);

let Titel = document.createElement("h1");
Titel.id = "title";
Titel.textContent = "Mein Pokédex";
Titelsection.appendChild(Titel);

let Pokémonabschnitt = document.createElement("div");
Pokémonabschnitt.id ="pokemon-cards";
Pokémonabschnitt.classList.add("container");
document.body.appendChild(Pokémonabschnitt);

for (const pokemon of pokemons) {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.textContent = pokemon.name;

    const image = document.createElement("img");
    image.src = pokemon.image;
    
    const type = document.createElement("p");
    type.textContent = "Typ: "+ pokemon.type;

    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(type);
    card.addEventListener("click", function(){
        console.log("Das Pokemon "+ pokemon.name + "wudre geklickt");
    });

    Pokémonabschnitt.appendChild(card);


}

//Funktionen

//Event-Listeners
const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("../images/error.png");
            pokePs.innerHTML = "";
            pokeAtk.innerHTML = "";
            pokeDef.innerHTML = "";
            pokeSpatk.innerHTML = "";
            pokeSpdef.innerHTML = "";
            pokeSpeed.innerHTML = "";
            pokeIdName.innerHTML = "";
            pokeType.innerHTML = "";
        }
        else {
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        pokePs.innerHTML = data.stats[0].base_stat;
        pokeAtk.innerHTML = data.stats[1].base_stat;
        pokeDef.innerHTML = data.stats[2].base_stat;
        pokeSpatk.innerHTML = data.stats[3].base_stat;
        pokeSpdef.innerHTML = data.stats[4].base_stat;
        pokeSpeed.innerHTML = data.stats[5].base_stat;
        pokeIdName.innerHTML = "# " + data.id + "_" + data.name.toUpperCase();
        pokeType.innerHTML = data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.slice(1);
        console.log(pokeImg);
        pokeImage(pokeImg);
    })
}

fetchPokemon();

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
    document.getElementById("pokeName").value = "";
}

document.onkeyup = enter;    
function enter(e) {
    if (e.which == 13) fetchPokemon();
}

import routes from "./routes";
import express from "express";
import PokemonSearchService from "./services/pokemonSearchService";
import fs from "fs";

const app = express();

app.use((req, res, next) => {
    res.set("Access-Control-Allow-Origin", req.get("origin") || "*");
    res.set("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE");
    res.set(
        "Access-Control-Allow-Headers",
        "*"
    );
    res.set("Access-Control-Expose-Headers", "popup-message");

    if (req.method === "OPTIONS") return res.end();
    next();
});



app.use(express.json());

app.use("/pokemons/", routes);


const pokemonService = new PokemonSearchService();
app.on('ready', () => {
    app.listen(3010, async () => {
        const pokemonService = new PokemonSearchService();

        console.log("Listening on 3000 port");
    });
});
console.log("Fetching all pokemons list");
pokemonService.fetchAllPokemonNames().then((allPokemons) => {
    fs.writeFile("pokemonNames.json", JSON.stringify(allPokemons), 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
        console.log("JSON file has been saved.");
        app.emit('ready');
    });
});



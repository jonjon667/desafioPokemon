import { Constants } from "../constants";
import PokemonSearchService from "../services/pokemonSearchService"


export async function searchPokemonByName(req, res) {
    const service = new PokemonSearchService();
    console.log(req.params.pokemon);
    try {
        let pokemon = await service.searchPokemonByName(req.params.pokemon);
        return res.json(pokemon);
    } catch (error: any) {
        console.log(error.response.status);
        if (error.response.status === 404) {
            return res.status(404).send({error:"Pokemon not found"});
        }
        else{
            return res.status(500).send({error:error});
        }
    }

}

export async function filterPokemonName(req, res) {
    const service = new PokemonSearchService();
    console.log(req.params.pokemon);
    
    let pokemonNames = service.filterPokemonNames(req.params.pokemon);
    return res.json(pokemonNames);
   

}

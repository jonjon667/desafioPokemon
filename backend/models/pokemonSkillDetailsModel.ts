export default class PokemonSkillDetails{
    name:string;
    effect:string;
    short_effect:string;
    pokemonList:string[];

    constructor(name:string,effect:string, short_effect:string,pokemonList:string[] ){
        this.name = name;
        this.effect = effect;
        this.short_effect = short_effect;
        this.pokemonList = pokemonList;
    }

}

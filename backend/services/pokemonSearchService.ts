import axios from "axios";
import { Constants } from "../constants";
import PokemonModel from "../models/pokemonModel";
import PokemonSkill from "../models/pokemonSkillModel";
import PokemonStatsModel from "../models/pokemonStatsModel";
import SkillSearchService from "./skillSearchService";
import pokemonNames from "../pokemonNames.json";

export default class PokemonSearchService {
    private skillSearchService: SkillSearchService;

    constructor() {
        this.skillSearchService = new SkillSearchService();
    }

    async fetchAllPokemonNames() {
        let pokemonRequest = await axios.get(Constants.POKEMON_NAMES_LIST_URL);
        return pokemonRequest.data.results.map((pokemonData) => {
            return pokemonData.name;
        });
    }

    async searchPokemonByName(name: string) {
        let pokemonRequest = await axios.get(Constants.API_URL + Constants.POKEMON_URL + name);
        console.log(pokemonRequest.data);
        let pokemonData = pokemonRequest.data;
        let pokemonSkills: PokemonSkill[] = [];
        let pokemonTypes: string[] = [];
        let pokemonStats: PokemonStatsModel[] = [];

        pokemonSkills = pokemonData.abilities.map((abilityData) => {
            return new PokemonSkill(abilityData.ability.name, abilityData.ability.url, abilityData.is_hidden, abilityData.slot,undefined,abilityData.ability.url.slice(0,-1).split('/').pop());
        });
        pokemonTypes = pokemonData.types.map((typeData) => {
            return typeData.type.name;
        });
        pokemonStats = pokemonData.stats.map((pokemonStatData) => {
            return new PokemonStatsModel(pokemonStatData.stat.name, pokemonStatData.base_stat, pokemonStatData.effort);
        });

        pokemonSkills = await this.skillSearchService.searchAllSkillsDescriptions(pokemonSkills);

        let response = new PokemonModel(pokemonData.name, pokemonSkills, pokemonTypes, pokemonData.id, pokemonData.sprites.front_default, pokemonData.sprites.back_default, pokemonStats);
        response.skills = response.getSortedSkills();

        return response;

    }
    filterPokemonNames(name: string): string[] {
        return pokemonNames.filter((nameFromJson)=>{
            return nameFromJson.toLowerCase().includes(name.toLowerCase());
        });
    }


}
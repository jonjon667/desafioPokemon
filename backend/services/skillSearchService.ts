import axios from "axios";
import { Constants } from "../constants";
import PokemonSkillDetails from "../models/pokemonSkillDetailsModel";
import PokemonSkill from "../models/pokemonSkillModel";
export default class SkillSearchService {

    async searchAllSkillsDescriptions(skills: PokemonSkill[]): Promise<PokemonSkill[]> {
        let requestPromises = skills.map((skill) => {
            return this.searchSkillDescription(skill.url);
        });

        let descriptions = await Promise.all(requestPromises);

        return skills.map((skill, index) => {
            skill.description = descriptions[index];
            return skill;
        });
    }

    private async searchSkillDescription(urlSkill: string): Promise<string> {
        let skillRequest = await axios.get(urlSkill);
        let description = 'Sem descrição';

        if (skillRequest.status == 200) {
            let skill = skillRequest.data;

            skill.effect_entries.forEach(effect_entry => {
                if (effect_entry.language.name === "en") {
                    description = effect_entry.short_effect;
                }
            });

        }

        return description;
    }

    async searchSkillDetail(skillName: string): Promise<PokemonSkillDetails> {
        let skillRequest = await axios.get(Constants.API_URL + Constants.ABILITY_URL + skillName);
        console.log(skillRequest.data);
        const detailData = skillRequest.data
        let effect = "No description";
        let short_effect = "No description";

        detailData.effect_entries.forEach((effect_entry) => {
            if (effect_entry.language.name === 'en') {
                effect = effect_entry.effect;
                short_effect = effect_entry.short_effect
            }
        })
        let pokemonList: string[] = detailData.pokemon.map((pokemonData) => {
            return pokemonData.pokemon.name;
        });
        return new PokemonSkillDetails(skillName,effect, short_effect, pokemonList);
        
    }

}
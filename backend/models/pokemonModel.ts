import PokemonSkill from "./pokemonSkillModel";
import PokemonStatsModel from "./pokemonStatsModel";

export default class PokemonModel {

    name: string;
    skills: PokemonSkill[];
    type: string[];
    id: number;
    imageFrontUrl: string;
    imageBackUrl: string;
    stats: PokemonStatsModel[];
    constructor(name: string, skills: PokemonSkill[], type: string[], id: number,imageFrontUrl:string,imageBackUrl:string, stats: PokemonStatsModel[]) {
        this.name = name;
        this.skills = skills;
        this.type = type;
        this.id = id;
        this.imageFrontUrl = imageFrontUrl;
        this.imageBackUrl = imageBackUrl;
        this.stats = stats;
    }

    getSortedSkills(): PokemonSkill[] {

        return this.skills.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        });

    }

}
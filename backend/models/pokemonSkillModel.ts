export default class PokemonSkill {
    name: string;
    url: string;
    is_hidden: boolean;
    slot: number;
    description: string;
    id:number;
    constructor(name: string, url: string, is_hidden: boolean, slot: number, description = "No description",id:number) {
        this.name = name;
        this.url = url;
        this.is_hidden = is_hidden;
        this.slot = slot;
        this.description = description;
        this.id = id;
    }
}
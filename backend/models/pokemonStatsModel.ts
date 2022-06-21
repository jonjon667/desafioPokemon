export default class PokemonStatsModel {

    name: string;
    base_number: number;
    effort:number;
    constructor(name:string,base_number:number,effort:number){
        this.name = name;
        this.base_number = base_number;
        this.effort = effort;
    }

}
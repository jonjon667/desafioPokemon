import PokemonModel from "../models/pokemonModel";
import PokemonSkill from "../models/pokemonSkillModel";

describe("pokemonModelTest", () => {
    it("Deve fazer o sort dos nomes das hablidades corretamente", () => {
        let pokemon = new PokemonModel('pokemonTeste',
            [new PokemonSkill('a', 'teste', true, 1, undefined, 1), new PokemonSkill('c', 'teste', true, 1, undefined, 1), new PokemonSkill('b', 'teste', true, 1, undefined, 1)],
            ['teste'], 1, 'teste', 'teste', []);

        expect(pokemon.getSortedSkills()).toEqual([new PokemonSkill('a', 'teste', true, 1, undefined, 1), new PokemonSkill('b', 'teste', true, 1, undefined, 1), new PokemonSkill('c', 'teste', true, 1, undefined, 1)])
    })
})
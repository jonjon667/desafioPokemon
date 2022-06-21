

import axios from "axios";
import clorophylMock from "./mocks/clorophylJsonMock.json"

jest.mock("axios");
import PokemonSearchService from "../services/pokemonSearchService";
import SkillSearchService from "../services/skillSearchService";
import PokemonSkill from "../models/pokemonSkillModel";
describe('SkillServiceTest', () => {
    const service = new SkillSearchService()

    it("Deve retornar corretamente a descricao das hablidades do pokemon", async () => {

        (axios.get as jest.Mock).mockResolvedValueOnce(clorophylMock);

        const pokemonSkillMock = new PokemonSkill('teste', 'teste', true, 1, undefined, 1);
        let skills = await service.searchAllSkillsDescriptions([pokemonSkillMock]);

        expect(skills).toEqual([new PokemonSkill('teste', 'teste', true, 1, "Doubles Speed during strong sunlight mock.", 1),
        ]);
    })

    it("Deve retornar corretamente a hablidade detalhada", async () => {
        (axios.get as jest.Mock).mockResolvedValueOnce(clorophylMock);

        const skill = await service.searchSkillDetail('chlorophyll');

        expect(skill).toEqual({
            "name": "chlorophyll",
            "effect": "This Pokémon's Speed is doubled during strong sunlight.\n\nThis bonus does not count as a stat modifier.",
            "short_effect": "Doubles Speed during strong sunlight mock.",
            "pokemonList": [
                "bulbasaur",
                "ivysaur",
                "venusaur",
                "oddish",
                "gloom",
                "vileplume",
                "bellsprout",
                "weepinbell",
                "victreebel",
                "exeggcute",
                "exeggutor",
                "tangela",
                "bellossom",
                "hoppip",
                "skiploom",
                "jumpluff",
                "sunkern",
                "sunflora",
                "seedot",
                "nuzleaf",
                "shiftry",
                "tropius",
                "cherubi",
                "tangrowth",
                "leafeon",
                "sewaddle",
                "swadloon",
                "leavanny",
                "cottonee",
                "whimsicott",
                "petilil",
                "lilligant",
                "maractus",
                "deerling",
                "sawsbuck",
                "venusaur-gmax"
            ]
        })
    });

});
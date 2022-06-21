
import axios from "axios";
import PokemonSkill from "../models/pokemonSkillModel";
import PokemonSearchService from "../services/pokemonSearchService";
import SkillSearchService from "../services/skillSearchService";
import pikachuMock from "./mocks/pikachuMock.json"

jest.mock("axios");
jest.mock("../services/skillSearchService")
describe('SearchService', () => {
  const service = new PokemonSearchService()
  it("Deve retornar a pesquisa de pokemons corretamente", () => {
    console.log(service.filterPokemonNames("pikachu"));
    expect(service.filterPokemonNames("pikachu")).toEqual(["pikachu",
      "pikachu-rock-star",
      "pikachu-belle",
      "pikachu-pop-star",
      "pikachu-phd",
      "pikachu-libre",
      "pikachu-cosplay",
      "pikachu-original-cap",
      "pikachu-hoenn-cap",
      "pikachu-sinnoh-cap",
      "pikachu-unova-cap",
      "pikachu-kalos-cap",
      "pikachu-alola-cap",
      "pikachu-partner-cap",
      "pikachu-starter",
      "pikachu-world-cap",
      "pikachu-gmax"])
  })

  it("Deve retornar corretamente o pokemon buscado", async () => {

    (SkillSearchService.prototype.searchAllSkillsDescriptions as jest.Mock).mockResolvedValue([new PokemonSkill('teste', 'teste', true, 1, "Doubles Speed during strong sunlight mock.", 1),]);
    (axios.get as jest.Mock).mockResolvedValueOnce(pikachuMock);

    let pokemon = await service.searchPokemonByName("pikachu");

    expect(pokemon).toEqual({
      "name": "pikachu",
      "skills": [
        {
          "name": "teste",
          "url": "teste",
          "is_hidden": true,
          "slot": 1,
          "description": "Doubles Speed during strong sunlight mock.",
          "id": 1
        }
      ],
      "type": [
        "electric"
      ],
      "id": 25,
      "imageFrontUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      "imageBackUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
      "stats": [
        {
          "name": "hp",
          "base_number": 35,
          "effort": 0
        },
        {
          "name": "attack",
          "base_number": 55,
          "effort": 0
        },
        {
          "name": "defense",
          "base_number": 40,
          "effort": 0
        },
        {
          "name": "special-attack",
          "base_number": 50,
          "effort": 0
        },
        {
          "name": "special-defense",
          "base_number": 50,
          "effort": 0
        },
        {
          "name": "speed",
          "base_number": 90,
          "effort": 2
        }
      ]
    })

  });

});
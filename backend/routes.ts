const express = require("express");

import { json } from 'stream/consumers';
import { searchAbilityDetailById } from './controllers/abilitySearchController';
import { filterPokemonName, searchPokemonByName } from './controllers/pokemonSearchController';

const routes = express.Router();
routes.get("/search/:pokemon", searchPokemonByName);
routes.get("/filter/:pokemon", filterPokemonName);
routes.get("/ability/:id",searchAbilityDetailById);

export default routes;
import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
import Modal from "./Modal";
import SkillModal from "./SkillModal";
function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [skillModalOpen, setSkillModalOpen] = useState(false);

  const [skill, setSkill] = useState({});

  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState({});

  const getPokemon = async (nomePokemon) => {
    setLoading(true);
    setModalOpen(true);
    setSkillModalOpen(false)
    let pokemon = await (await axios.get('/pokemons/search/' + nomePokemon)).data;
    console.log(pokemon);
    setPokemon(pokemon);
    setLoading(false);
  }

  const getSkillDetail = async (nomeSkill) => {
    setLoading(true);
    setSkillModalOpen(true);
    let skill = await (await axios.get('/pokemons/ability/' + nomeSkill)).data;
    console.log(pokemon);
    setSkill(skill);
    setLoading(false);
  }

  const handleFilter = async (event) => {
    const searchWord = event.target.value;

    setWordEntered(searchWord);
    const newFilter = await (await axios.get('/pokemons/filter/' + searchWord)).data;

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  const Search = () => {
    return <div className="search">

      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>

      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <div className="dataItem" onClick={() => {
                console.log("CLICK");
                getPokemon(value);
              }} target="_blank">
                <p>{value} </p>
              </div>
            );
          })}
        </div>
      )}

    </div>
  }
  return (
    <div>
      {modalOpen && !skillModalOpen && <Modal setOpenModal={setModalOpen} setLoading = {setLoading} isLoading = {loading} pokemonInfo = {pokemon} openSkill = {getSkillDetail}/>}
      {skillModalOpen && <SkillModal setOpenSkillModal={setSkillModalOpen} setLoading = {setLoading} isLoading = {loading} skillInfo = {skill} openPokemon = {getPokemon}/>}

      {!modalOpen ? <Search /> : null}
    </div>
  );
}

export default SearchBar;

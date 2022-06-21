import React from "react";
import "./SkillModal.css";

function SkillModal({ setOpenSkillModal, setLoading, isLoading, skillInfo, openPokemon }) {
    return (
        <div className="modalBackground">
            {isLoading ? <div class="loader"></div> :
                <div className="modalContainer">
                    <div className="titleCloseBtn">
                        <button
                            onClick={() => {
                                setOpenSkillModal(false);
                            }}
                        >
                            X
                        </button>
                    </div>
                    <div className="title">
                        <h1>{skillInfo.name}</h1>
                    </div>
                    <div className="subtitle">
                        <p>{skillInfo.effect}</p>
                    </div>
                    <div className="subtitle">
                        <p>Pokemons that have this skills</p>
                    </div>
                    <div className="itensSection">
                        {skillInfo.pokemonList.map((pokemon) => {
                            return <div class="column">
                                <div onClick={() => {
                                    openPokemon(pokemon);
                                }} className="statsContainerClickable">
                                    <div class="card" >
                                        <div class="card-body">
                                            <h5 class="card-title">{pokemon}</h5>
                                        </div>
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                        })}

                    </div>

                    <div className="footer">
                        <button
                            onClick={() => {
                                setOpenSkillModal(false);
                            }}
                            id="cancelBtn"
                        >
                            Back
                        </button>
                    </div>
                </div>}


        </div>
    );
}

export default SkillModal;
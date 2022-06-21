import React from "react";
import "./Modal.css";

function Modal({ setOpenModal, setLoading, isLoading, pokemonInfo, openSkill }) {
    return (
        <div className="modalBackground">
            {isLoading ? <div class="loader"></div> :
                <div className="modalContainer">
                    <div className="titleCloseBtn">
                        <button
                            onClick={() => {
                                setOpenModal(false);
                            }}
                        >
                            X
                        </button>
                    </div>
                    <div className="title">
                        <h1>{pokemonInfo.name}</h1>
                    </div>
                    <div className="title">
                        <img src={pokemonInfo.imageFrontUrl} alt="Imagem frontal" />
                        <img src={pokemonInfo.imageBackUrl} alt="Imagem frontal" />
                    </div>
                    <div className="subtitle">
                        <p>Abilities</p>
                    </div>

                    <div className="itensSection">
                        {pokemonInfo.skills.map((skill) => {
                            return <div onClick={() => {
                                console.log("clicl");
                                openSkill(skill.name);
                            }} className="statsContainerClickable">
                                <div class="card" >
                                    <div class="card-body">
                                        <h5 class="card-title">{skill.name}</h5>
                                        <p class="card-text">{skill.description}</p>
                                    </div>
                                </div>
                            </div>
                        })}

                    </div>
                    <div className="subtitle">
                        <p>Type</p>
                    </div>

                    <div className="itensSection">
                        {pokemonInfo.type.map((type) => {
                            return <div className="statsContainer">
                                <div class="card" >
                                    <div class="card-body">

                                        <p class="card-text">{type}</p>
                                    </div>
                                </div>
                            </div>
                        })}

                    </div>
                    <div className="footer">
                        <button
                            onClick={() => {
                                setOpenModal(false);
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

export default Modal;
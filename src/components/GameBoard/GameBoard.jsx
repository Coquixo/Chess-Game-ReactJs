import React, { useState } from "react";
import GamePiece from "../GamePieces/EmptySpace/GamePiece";
import "./GameBoard.scss";


const GameBoard = () => {


    const cardinalY = 8;
    const cardinalX = 8;
    let board = [];

    const [pieceValue, setPieceValue] = useState({
        "empty": 0,
        "king": 1,
        "queen": 2,
        "bishop": 3,
        "pawn": 4,
        "rook": 5,
        "knight": 6
    })

    const movePiece = (i, j) => {
        console.log("Has clickado la ficha x, y aqui va la funcion de moverlo: ");
        console.log(`posicion: ${i}${j}`);
        console.log(`pieceValue`);
    };


    const checkWhatComponentIsLoaded = () => {
        board.forEach((key) => {
            console.log(key.key);
        });
    };

    const spaceClicked = (i, j) => {
        movePiece(i, j);
        checkWhatComponentIsLoaded();
    };

    for (let i = 0; i < cardinalX; i++) {
        for (let j = 0; j < cardinalY; j++) {
            board.push(
                <span
                    key={`${i}${j}`}
                    className="inGameSingleBox"
                    onClick={() => spaceClicked(i, j)}>
                    {/* {i} {j} */}
                    <GamePiece name={Object.keys(pieceValue)[1]} value={pieceValue.king} />
                </span>
            );
        }
    }

    return (
        <div className="boardBox">
            <div className="boardGame">{board}</div>
        </div>
    );
};

export default GameBoard;

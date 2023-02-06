import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import EmptySpace from "../GamePieces/EmptySpace/EmptySpace";
import King from "../GamePieces/King/King";
import "./GameBoard.scss";

const GameBoard = () => {
    const [pieceValue, setPieceValue] = useState({
        king: 1,
        queen: 2,
        rook: 3,
    });

    const cardinalY = 8;
    const cardinalX = 8;
    let board = [];

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
                    {i} {j}
                    {/* <EmptySpace /> */}
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

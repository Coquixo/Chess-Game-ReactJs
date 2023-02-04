import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./GameBoard.scss";

const GameBoard = () => {
    const cardinalY = 8;
    const cardinalX = 8;
    let board = [];

    for (let i = 0; i < cardinalX; i++) {
        for (let j = 0; j < cardinalY; j++) {
            board.push(
                <span className="inGameSingleBox">
                    {i + 1}
                    {j + 1}
                </span>
            );
        }
    }

    return (
        <div className="boardBox">
            <div className="boardGame">
                {board}
            </div>
        </div>
    );
};

export default GameBoard;

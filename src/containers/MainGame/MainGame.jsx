import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import GameBoard from "../../components/GameBoard/GameBoard";

const MainGame = () => {
    return (
        <div className="pt-5">

            < Container >
                <GameBoard />
                <Row>
                    <Col>
                        <span>Start Game</span>
                    </Col>
                </Row>
            </Container >
        </div >
    );
};

export default MainGame;

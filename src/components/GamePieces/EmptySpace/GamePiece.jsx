import React from "react";
import "./GamePiece.scss";

const GamePiece = (props) => {
    return (
        <div className="spaceDesign">

            {props.name}
            {props.value}
        </div>
    );
};

export default GamePiece;

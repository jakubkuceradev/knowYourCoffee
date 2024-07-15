import "./Button.css";
import React from "react";

const Button: React.FC<{
    text: string;
    handleClick: () => void;
}> = ({ text, handleClick }) => {
    return (
        <button className={`button--container mt-2`} onClick={handleClick}>
            <h4 className="button--text">{text}</h4>
        </button>
    );
};

export default Button;

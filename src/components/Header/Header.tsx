import React from "react";
import "./Header.css";

const Header: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
        <div className="header--container">
            <button className="header--button" onClick={onClick}>
                <h2 className="header--title-light">Know Your</h2>
                <h1 className="header--title-strong">COFFEE</h1>
            </button>
        </div>
    );
};

export default Header;

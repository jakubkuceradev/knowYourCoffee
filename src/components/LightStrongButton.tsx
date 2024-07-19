import React, { ButtonHTMLAttributes } from "react";

export type LightStrongButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    lightTitle: string;
    strongTitle: string;
    onClick?: () => void;
};

const LightStrongButton: React.FC<LightStrongButtonProps> = ({
    lightTitle,
    strongTitle,
    onClick,
    ...props
}) => {
    return (
        <button className="button" onClick={onClick} {...props}>
            <h2 className="title-light">{lightTitle}</h2>
            <h1 className="title-strong">{strongTitle}</h1>
        </button>
    );
};

export default LightStrongButton;

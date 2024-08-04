import React from "react";
import {
    HeaderButton,
    HeaderContainer,
    HeaderLightTitle,
    HeaderStrongTitle,
} from "./Header.styled";

export type HeaderButtonProps = {
    lightTitle: string;
    strongTitle: string;
    onClick?: () => void;
};

const Header: React.FC<HeaderButtonProps> = ({
    lightTitle,
    strongTitle,
    onClick,
    ...props
}) => {
    return (
        <HeaderContainer>
            <HeaderButton onClick={onClick} {...props}>
                <HeaderLightTitle>{lightTitle}</HeaderLightTitle>
                <HeaderStrongTitle>{strongTitle}</HeaderStrongTitle>
            </HeaderButton>
        </HeaderContainer>
    );
};

export default Header;

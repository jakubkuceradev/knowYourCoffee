import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0) 100%
    );
`;

export const HeaderButton = styled.button`
    display: flex;
    padding: 0.5rem 1rem;
    justify-content: center;
    align-items: center;
`;

export const HeaderLightTitle = styled.h2`
    margin: 0;
    margin-right: 0.4rem;

    font-style: normal;
    font-weight: 400;
    font-size: 1.3rem;

    @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
        font-size: 1.5rem;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
        font-size: 1.8rem;
    }
`;

export const HeaderStrongTitle = styled.h1`
    margin: 0;
    font-family: "Rubik Mono One", Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 2.5rem;

    @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
        font-size: 2.8rem;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
        font-size: 3.2rem;
    }
`;

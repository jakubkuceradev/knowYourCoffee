import styled from "styled-components";

export const AccordionContainer = styled.div`
    margin-bottom: 1.5rem;
`;

export const AccordionHeaderTitle = styled.h4`
    color: black;
    margin: 0;
    padding-right: 2rem;
`;

export const AccordionButton = styled.button`
    position: relative;
    width: 100%;
    padding: 0.6rem 1rem;
    background-color: white;
    margin-bottom: 0.3rem;

    &:first-child {
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
    }

    &:last-child {
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
    }

    &:hover {
        background-color: rgba(240, 240, 240, 1);
    }
`;

export const AccordionHeaderContainer = styled.div``;

export const AccordionIcon = styled.div`
    position: absolute;
    top: 0.55rem;
    right: 1rem;
    font-size: 1.25rem;
    font-weight: bold;
    color: black;

    @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
        top: 0.8rem;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
        top: 0.85rem;
    }
`;

export const AccordionContentContainer = styled.div<{ $expanded?: boolean }>`
    overflow: hidden;
    max-height: ${({ $expanded }) => ($expanded ? "15rem" : "0")};
    transition: ${({ $expanded }) =>
        $expanded ? "max-height 0.4s ease-in" : "max-height 0.2s ease-out"};
`;

export const AccordionContentText = styled.p`
    color: black;
    margin: 0.5rem 0;

    @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
        font-size: 1.2rem;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
        font-size: 1.5rem;
    }
`;

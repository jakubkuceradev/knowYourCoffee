import styled from "styled-components";

export const SearchContainer = styled.div`
    position: relative;
    margin-bottom: ${(props) => props.theme.spacing.md};
`;

export const SearchBarContainer = styled.div`
    display: flex;
    width: 100%;
    background: rgb(230, 230, 230);
    box-shadow: 0px 6px 4.2px 2px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    border-radius: 3rem;
`;

export const SearchBarInput = styled.input`
    padding: 0.5rem 1rem;
    width: 100%;
    font-size: 1.2rem;
    background: rgb(230, 230, 230);
    border-top-left-radius: 3rem;
    border-bottom-left-radius: 3rem;

    @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
        font-size: 1.3rem;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
        font-size: 1.6rem;
    }
`;

export const SearchBarButton = styled.button`
    width: auto;
    padding: 0.5rem 1.5rem 0.5rem 1.2rem;
    border-left: 1px solid grey;
    font-weight: 700;
    font-family: ${(props) => props.theme.typography.fontFamily.header};
    color: ${(props) => props.theme.colors.text.dark};
    font-size: 1rem;

    &:hover {
        background-color: rgba(210, 210, 210, 1);
    }
`;

export const SearchSuggestionsContainer = styled.div<{
    readonly $isDisplayed: boolean;
}>`
    display: ${(props) => (props.$isDisplayed ? "auto" : "none")};
    width: 100%;
    top: 3rem;
    opacity: 100%;
    position: absolute;
    overflow: hidden;
    background: rgba(230, 230, 230, 1);
    box-shadow: 0px 6px 4.2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 1rem;
    z-index: 20;

    @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
        top: 3.3rem;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
        top: 3.6rem;
    }
`;

export const SearchSuggestionButton = styled.button<{
    readonly $isFocused: boolean;
}>`
    position: relative;
    padding: 0.6rem 1rem;
    background-color: ${(props) =>
        props.$isFocused ? "rgba(200, 200, 200, 1)" : "rgba(230, 230, 230, 1)"};
    border-bottom: 1px solid grey;

    &:hover {
        background-color: rgba(210, 210, 210, 1);
    }
`;

export const SearchSuggestionTitleContainer = styled.div``;

export const SearchSuggestionContent = styled.p`
    color: ${(props) => props.theme.colors.text.dark};
    margin: 0;
`;

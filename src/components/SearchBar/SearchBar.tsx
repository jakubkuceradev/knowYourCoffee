import React, {
    useState,
    ChangeEvent,
    KeyboardEvent,
    useMemo,
    useEffect,
} from "react";
import {
    SearchBarButton,
    SearchBarContainer,
    SearchBarInput,
    SearchContainer,
    SearchSuggestionButton,
    SearchSuggestionContent,
    SearchSuggestionsContainer,
} from "./SearchBar.styled";
import { BeverageData } from "../../types";

type ItemTitle = {
    title: string;
    index: number;
};

const SearchBar: React.FC<{
    data: BeverageData[];
    setBeverageID: (id: number) => void;
    beverageID: number | null;
}> = ({ data, setBeverageID, beverageID }) => {
    const [query, setQuery] = useState("");
    const [suggestionsDisplayed, setSuggestionsDisplayed] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState(-1);

    useEffect(() => {
        if (beverageID === null) setQuery("");
    }, [beverageID]);

    const suggestions = useMemo(() => {
        const options = data.map((item, index) => ({
            title: item.title,
            index,
        }));

        const startsWithSuggestions: ItemTitle[] = [];
        const includesNotStartsSuggestions: ItemTitle[] = [];

        options.forEach((item) => {
            if (
                !latinise(item.title)
                    .toLowerCase()
                    .includes(latinise(query).toLowerCase())
            )
                return;

            if (
                latinise(item.title)
                    .toLowerCase()
                    .startsWith(latinise(query).toLowerCase())
            )
                startsWithSuggestions.push(item);
            else includesNotStartsSuggestions.push(item);
        });

        return [
            ...startsWithSuggestions,
            ...includesNotStartsSuggestions,
        ].slice(0, 10);
    }, [data, query]);

    useEffect(() => {
        setQuery("");
        setSuggestionsDisplayed(false);
        setFocusedIndex(-1);
    }, [data]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.target.value === ""
            ? setSuggestionsDisplayed(false)
            : setSuggestionsDisplayed(true);

        setFocusedIndex(0);
        setQuery(event.target.value);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (
            !suggestionsDisplayed ||
            focusedIndex < 0 ||
            focusedIndex >= suggestions.length
        )
            return;

        if (event.key === "ArrowDown") {
            event.preventDefault();
            if (focusedIndex < suggestions.length - 1)
                setFocusedIndex((previous) => previous + 1);
            else if (focusedIndex === suggestions.length - 1)
                setFocusedIndex(0);
        } else if (event.key === "ArrowUp") {
            event.preventDefault();
            if (focusedIndex > 0) setFocusedIndex((previous) => previous - 1);
            else if (focusedIndex === 0)
                setFocusedIndex(suggestions.length - 1);
        } else if (event.key === "Enter") {
            event.preventDefault();
            handleClick(suggestions[focusedIndex].index);
        }
    };

    const handleClick = (index: number) => {
        setBeverageID(index);
        setQuery(data[index].title);
        setSuggestionsDisplayed(false);
    };

    return (
        <SearchContainer>
            <SearchBarContainer>
                <SearchBarInput
                    onKeyDown={handleKeyDown}
                    onChange={handleChange}
                    value={query}
                    type="text"
                    placeholder="Search for a beverage.."
                />
                <SearchBarButton
                    onClick={() => {
                        setQuery("");
                        setSuggestionsDisplayed(false);
                    }}
                >
                    X
                </SearchBarButton>
            </SearchBarContainer>

            <SearchSuggestionsContainer $isDisplayed={suggestionsDisplayed}>
                {suggestions.slice(0, 10).map((item, i) => (
                    <Suggestion
                        content={item.title}
                        key={item.index}
                        handleClick={() => handleClick(item.index)}
                        focused={i === focusedIndex}
                    />
                ))}
            </SearchSuggestionsContainer>
        </SearchContainer>
    );
};

export const Suggestion: React.FC<{
    content: string;
    focused: boolean;
    handleClick: () => void;
}> = ({ content, focused, handleClick }) => {
    return (
        <SearchSuggestionButton $isFocused={focused} onClick={handleClick}>
            <SearchSuggestionContent>{content}</SearchSuggestionContent>
        </SearchSuggestionButton>
    );
};

export default SearchBar;

const latinise = (str: string) => {
    const accents: {
        [key: string]: string;
    } = {
        á: "a",
        à: "a",
        â: "a",
        ä: "a",
        ã: "a",
        å: "a",
        ā: "a",
        ç: "c",
        é: "e",
        è: "e",
        ê: "e",
        ë: "e",
        ē: "e",
        ė: "e",
        ę: "e",
        í: "i",
        ì: "i",
        î: "i",
        ï: "i",
        ī: "i",
        į: "i",
        ñ: "n",
        ń: "n",
        ó: "o",
        ò: "o",
        ô: "o",
        ö: "o",
        õ: "o",
        ø: "o",
        ō: "o",
        ś: "s",
        š: "s",
        ú: "u",
        ù: "u",
        û: "u",
        ü: "u",
        ū: "u",
        ý: "y",
        ÿ: "y",
        ź: "z",
        ż: "z",
        ž: "z",
        Á: "A",
        À: "A",
        Â: "A",
        Ä: "A",
        Ã: "A",
        Å: "A",
        Ā: "A",
        Ç: "C",
        É: "E",
        È: "E",
        Ê: "E",
        Ë: "E",
        Ē: "E",
        Ė: "E",
        Ę: "E",
        Í: "I",
        Ì: "I",
        Î: "I",
        Ï: "I",
        Ī: "I",
        Į: "I",
        Ñ: "N",
        Ń: "N",
        Ó: "O",
        Ò: "O",
        Ô: "O",
        Ö: "O",
        Õ: "O",
        Ø: "O",
        Ō: "O",
        Ś: "S",
        Š: "S",
        Ú: "U",
        Ù: "U",
        Û: "U",
        Ü: "U",
        Ū: "U",
        Ý: "Y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
    };

    return str
        .split("")
        .map((char) => accents[char] || char)
        .join("");
};

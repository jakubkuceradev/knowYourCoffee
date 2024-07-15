import React, {
    useState,
    ChangeEvent,
    KeyboardEvent,
    useMemo,
    useEffect,
} from "react";
import { BeverageData } from "../../types";
import "./SearchBar.css";

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
            if (!item.title.toLowerCase().includes(query.toLowerCase())) return;

            if (item.title.toLowerCase().startsWith(query.toLowerCase()))
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
        <div className="search--container">
            <div className="search-bar--container">
                <input
                    onKeyDown={handleKeyDown}
                    className="search-bar--input"
                    type="text"
                    value={query}
                    placeholder="Search for a beverage.."
                    onChange={handleChange}
                />
                <button
                    onClick={() => {
                        setQuery("");
                        setSuggestionsDisplayed(false);
                    }}
                    className="search-bar--clear"
                >
                    X
                </button>
            </div>

            <div
                className={`search-suggestions--container ${
                    suggestionsDisplayed ? `display` : `hide`
                }`}
            >
                {suggestions.slice(0, 10).map((item, i) => (
                    <Suggestion
                        content={item.title}
                        key={item.index}
                        handleClick={() => handleClick(item.index)}
                        focused={i === focusedIndex}
                    />
                ))}
            </div>
        </div>
    );
};

export const Suggestion: React.FC<{
    content: string;
    focused: boolean;
    handleClick: () => void;
}> = ({ content, focused, handleClick }) => {
    return (
        <button
            className={`suggestions-item--container ${
                focused ? "suggestions-item--focused" : ""
            }`}
            onClick={handleClick}
        >
            <div className="preparation-item--header-container">
                <p className="suggestions-item--title">{content}</p>
            </div>
        </button>
    );
};

export default SearchBar;

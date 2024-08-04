import { useState, useCallback } from "react";

const useToggle = (initialState: boolean = false) => {
    const [state, setState] = useState(initialState);

    const toggle = useCallback(() => {
        setState((prev) => !prev);
    }, []);

    return [state, toggle, setState] as const;
};

export default useToggle;

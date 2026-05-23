import { useMatch } from "react-router-dom";

type useIsActiveOptions = {
    exact?: boolean,
    caseSensitive?: boolean;
}

export const useIsActive = (
    path: string,
    options: useIsActiveOptions = {}
) => {
    const { exact = false, caseSensitive = false } = options

    const match = useMatch({

        path,
        end: exact,
        caseSensitive
    }

    )
    return !!match
}
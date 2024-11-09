import classes from "./SearchBar.module.css";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getTeams } from "../http";
import { useSearchStore } from "../store/store";

const SearchBar: React.FC = () => {
    const initialSearch = useSearchStore((state) => state.searchData);
    const [search, setSearch] = useState<string>(initialSearch);
    const [debouncedSearch, setDebouncedSearch] = useState<string>("");
    const setSearchData = useSearchStore((state) => state.setSearchData);

    const { isLoading } = useQuery({
        queryKey: ["teams", debouncedSearch],
        queryFn: () => getTeams(debouncedSearch),
        enabled: debouncedSearch.length > 2,
        staleTime: 1000 * 60 * 5,
    });
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedSearch(search);
            setSearchData(search);
            console.log(search);
        }, 2000);

        return () => {
            clearTimeout(timeout);
        };
    }, [search]);

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    return (
        <div className={classes.searchBarContainer}>
            <input
                className={classes.searchInput}
                type="text"
                placeholder="Search"
                onChange={onInputChange}
            />
            {isLoading && <span className={classes.loader}></span>}
        </div>
    );
};

export default SearchBar;

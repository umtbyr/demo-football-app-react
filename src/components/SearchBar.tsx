import classes from "./SearchBar.module.css";
import { useState } from "react";
import { useSearchStore } from "../store/store";
import { useDebounceSearchAndSetToStore } from "../hooks";

const SearchBar: React.FC = () => {
    const initialSearch = useSearchStore((state) => state.searchData);
    const [search, setSearch] = useState(initialSearch);
    const [isLoading] = useDebounceSearchAndSetToStore(search, initialSearch);

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

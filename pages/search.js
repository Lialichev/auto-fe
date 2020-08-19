import { wrapper } from "../store";
import { getAdv } from "../store/searchResults/action";
import { setFilter } from "../store/searchFilter/action";
import { useSelector } from "react-redux";

const Search = () => {
    const { data } = useSelector((state) => state.searchResults);

    return (
        <>
            <div>Search</div>
            {
                data.map((e, i) => <div key={ i }>{ i }</div>)
            }
        </>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ store, query }) => {
        await store.dispatch(setFilter(query));
        await store.dispatch(getAdv(query));
    }
)

export default Search;

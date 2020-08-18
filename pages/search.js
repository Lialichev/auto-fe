import { wrapper } from "../store";
import { getCategories } from "../store/categories/action";

const Search = () => {

    return (
        <div>Search</div>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ store, query }) => {
        console.log(query);
    }
)

export default Search;

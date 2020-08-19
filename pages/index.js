import React from 'react';
import SearchFilter from "../components/search/SearchFIlter";
import { wrapper } from '../store';
import { getCategories } from '../store/categories/action';
import PageLayout from "../components/layouts/PageLayout";
import HomepageHeading from "../components/heading/HomepageHeading";

const Homepage = () => (
    <PageLayout heading={ <HomepageHeading/> }>
        <SearchFilter/>
    </PageLayout>
);

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
        await store.dispatch(getCategories());
    }
)

export default Homepage;

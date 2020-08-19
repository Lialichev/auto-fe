import React from 'react';
import { Button, Grid, Icon } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import getValidQueryParams from "../../helpers/getValidQueryParams";

export default function SearchControl() {
    const router = useRouter();

    const params = useSelector((state) => state.searchFilter);

    const handleSearch = () => {
        router.push({
            pathname: '/search',
            query: getValidQueryParams(params),
        })
    };

    return (
        <>
            <Grid.Column>
                <Button
                    animated
                    primary
                    onClick={ handleSearch }
                >
                    <Button.Content visible>Поиск</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right'/>
                    </Button.Content>
                </Button>
            </Grid.Column>
            <Grid.Column>
                <Button basic inverted floated="right">
                    Расширенный поиск
                </Button>
            </Grid.Column>
        </>
    );
};

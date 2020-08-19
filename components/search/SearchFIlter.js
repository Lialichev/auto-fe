import React, { useEffect } from 'react';
import { Container, Form, Grid, Segment } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { getRegions } from "../../store/regions/action";
import Category from "./Category";
import Brand from "./Brand";
import Model from "./Model";
import Price from "./Price";
import Region from "./Region";
import Year from "./Year";
import SearchControl from "./SearchControl";

export default function SearchFilter() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRegions());
    }, []);

    return (
        <Segment vertical style={ { padding: '5em 0em' } }>
            <Container>
                <Form inverted>
                    <Segment inverted>
                        <Grid columns={ 3 }>
                            <Grid.Row>
                                <Grid.Column>
                                    {/* Category */}
                                    <Category/>
                                </Grid.Column>
                                <Grid.Column>
                                    {/* Brand */}
                                    <Brand/>
                                </Grid.Column>
                                <Grid.Column>
                                    {/* Model */}
                                    <Model/>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    {/* Region */}
                                    <Region/>
                                </Grid.Column>
                                <Grid.Column>
                                    <Form.Group widths='equal' style={ { marginBottom: 0 } }>
                                        {/* Year */}
                                        <Year/>
                                    </Form.Group>
                                </Grid.Column>
                                <Grid.Column>
                                    <Form.Group widths='equal' style={ { marginBottom: 0 } }>
                                        {/* Price */}
                                        <Price/>
                                    </Form.Group>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns={ 2 }>
                                {/* Search Control */}
                                <SearchControl />
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Form>
            </Container>
        </Segment>
    )
};

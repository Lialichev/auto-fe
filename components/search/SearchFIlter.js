import React, { useEffect } from 'react';
import { Button, Container, Form, Grid, Icon, Segment } from "semantic-ui-react";
import { useRouter } from 'next/router';
import { useDispatch } from "react-redux";
import { getRegions } from "../../store/regions/action";
import Category from "./Category";
import Brand from "./Brand";
import Model from "./Model";
import Price from "./Price";
import Region from "./Region";
import Year from "./Year";

export default function SearchFilter() {
    const dispatch = useDispatch();
    const router = useRouter();

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
                                    <Category/>
                                </Grid.Column>
                                <Grid.Column>
                                    <Brand/>
                                </Grid.Column>
                                <Grid.Column>
                                    <Model/>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Region/>
                                </Grid.Column>
                                <Grid.Column>
                                    <Form.Group widths='equal' style={ { marginBottom: 0 } }>
                                        <Year/>
                                    </Form.Group>
                                </Grid.Column>
                                <Grid.Column>
                                    <Form.Group widths='equal' style={ { marginBottom: 0 } }>
                                        <Price/>
                                    </Form.Group>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns={ 2 }>
                                <Grid.Column>
                                    <Button
                                        animated
                                        primary
                                        onClick={() => router.push('/search')}
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
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Form>
            </Container>
        </Segment>
    )
};

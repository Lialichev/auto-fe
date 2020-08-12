import React, { useEffect, useState } from 'react';
import { Button, Container, Form, Grid, Icon, Input, Segment, Select } from "semantic-ui-react";
import get from 'lodash/get';
import styles from "../../styles/home.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getBrandsByCategory } from "../../store/brands/action";
import { getModelsByBrand } from "../../store/models/action";
import { getRegions } from "../../store/regions/action";

export default function SearchFilter() {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories);
    const brands = useSelector((state) => state.brands);
    const models = useSelector((state) => state.models);
    const regions = useSelector((state) => state.regions);

    const [ state, setState ] = useState({
        category: get(categories, '[0]._id'),
        brand: '',
        model: '',
        region: '',
    });

    useEffect(() => {
        dispatch(getRegions());
    }, []);

    useEffect(() => {
        if (state.category) {
            dispatch(getBrandsByCategory({ category_id: state.category }));
            setState(prevState => ({
                ...prevState,
                brand: '',
                model: '',
            }))
        }
    }, [ state.category ]);

    useEffect(() => {
        if (state.brand) {
            dispatch(getModelsByBrand({ brand_id: state.brand }));
            setState(prevState => ({
                ...prevState,
                model: '',
            }))
        }
    }, [ state.brand ]);

    const handleChange = (e, { name, value }) => setState(prevState => ({
        ...prevState,
        [name]: value
    }));

    return (
        <Segment vertical style={ { padding: '5em 0em' } }>
            <Container>
                <Form inverted>
                    <Segment inverted>
                        <Grid columns={ 3 }>
                            <Grid.Row>
                                <Grid.Column>
                                    <Form.Select
                                        fluid
                                        label='Тип транспорта'
                                        options={ categories.map(({ name, _id }) => ({ text: name, value: _id })) }
                                        clearable={ true }
                                        value={ state.category }
                                        onChange={ handleChange }
                                        name="category"
                                        placeholder='Тип транспорта'
                                    />
                                </Grid.Column>
                                <Grid.Column>
                                    <Form.Field
                                        control={ Select }
                                        options={ brands.map(({ name, _id }) => ({ text: name, value: _id })) }
                                        clearable={ true }
                                        label={ { children: 'Марка', htmlFor: 'form-select-control-brand' } }
                                        placeholder='Марка'
                                        value={ state.brand }
                                        onChange={ handleChange }
                                        name="brand"
                                        search
                                        searchInput={ { id: 'form-select-control-brand' } }
                                        noResultsMessage="Результатов не найдено"
                                    />
                                </Grid.Column>
                                <Grid.Column>
                                    <Form.Field
                                        control={ Select }
                                        options={ models.map(({ name, _id }) => ({ text: name, value: _id })) }
                                        clearable={ true }
                                        label={ { children: 'Модель', htmlFor: 'form-select-control-model' } }
                                        placeholder='Модель'
                                        value={ state.model }
                                        onChange={ handleChange }
                                        name="model"
                                        search
                                        searchInput={ { id: 'form-select-control-model' } }
                                        noResultsMessage="Результатов не найдено"
                                    />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Form.Field
                                        control={ Select }
                                        options={ regions.map(({ name, _id }) => ({ text: name, value: _id }))  }
                                        clearable={ true }
                                        label={ { children: 'Регион', htmlFor: 'form-select-control-region' } }
                                        placeholder='Регион'
                                        value={ state.region }
                                        onChange={ handleChange }
                                        name="region"
                                        search
                                        searchInput={ { id: 'form-select-control-region' } }
                                        noResultsMessage="Результатов не найдено"
                                    />
                                </Grid.Column>
                                <Grid.Column>
                                    <Form.Group widths='equal' style={ { marginBottom: 0 } }>
                                        <Form.Select
                                            fluid
                                            clearable={ true }
                                            label='Год'
                                            options={ new Array(120).fill('').map((item, i) => {
                                                const newItem = 2020 - i;

                                                return { key: newItem, text: newItem, value: newItem };
                                            }) }
                                            placeholder='от'
                                        />
                                        <Form.Select
                                            className={ styles.hideLabel }
                                            fluid
                                            clearable={ true }
                                            label='Год'
                                            options={ new Array(120).fill('').map((item, i) => {
                                                const newItem = 2020 - i;

                                                return { key: newItem, text: newItem, value: newItem };
                                            }) }
                                            placeholder='до'
                                        />
                                    </Form.Group>
                                </Grid.Column>
                                <Grid.Column>
                                    <Form.Group widths='equal' style={ { marginBottom: 0 } }>
                                        <Form.Field>
                                            <label>Цена</label>
                                            <Input
                                                label='$'
                                                clearable="true"
                                                type="number"
                                                placeholder='от'
                                                fluid
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <label style={ { color: 'transparent' } }>Цена</label>
                                            <Input
                                                label='$'
                                                placeholder='до'
                                                type="number"
                                                fluid
                                            />
                                        </Form.Field>
                                    </Form.Group>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns={ 2 }>
                                <Grid.Column>
                                    <Button animated primary type='submit'>
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

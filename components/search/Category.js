import React, { useEffect } from 'react';
import { Form } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../../store/searchFilter/action";
import get from "lodash/get";

const Category = () => {
    const dispatch = useDispatch();

    const categories = useSelector((state) => state.categories);
    const category = useSelector((state) => state.searchFilter.category);

    useEffect(() => {
        dispatch(setCategory(get(categories, '[0]._id')));
    }, []);

    return (
        <Form.Select
            fluid
            label='Тип транспорта'
            options={ categories.map(({ name, _id }) => ({ text: name, value: _id })) }
            clearable={ true }
            value={ category }
            onChange={ (e, { value }) => dispatch(setCategory(value)) }
            name="category"
            placeholder='Тип транспорта'
        />
    )
};

export default Category;

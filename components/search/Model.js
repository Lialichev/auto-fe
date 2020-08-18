import React, { useEffect } from 'react';
import { Form, Select } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { setModel } from "../../store/searchFilter/action";
import { getModelsByBrand } from "../../store/models/action";

const Model = () => {
    const dispatch = useDispatch();

    const models = useSelector((state) => state.models);
    const model = useSelector((state) => state.searchFilter.model);
    const brand = useSelector((state) => state.searchFilter.brand);

    useEffect(() => {
        if (brand) {
            dispatch(getModelsByBrand({ brand_id: brand }));
        } else {
            // Clear
            dispatch(setModel(''));
        }
    }, [ brand ]);

    return (
        <Form.Field
            control={ Select }
            options={ models.map(({ name, _id }) => ({ text: name, value: _id })) }
            clearable={ true }
            label={ { children: 'Модель', htmlFor: 'form-select-control-model' } }
            placeholder='Модель'
            value={ model }
            onChange={ (e, { value }) => dispatch(setModel(value)) }
            name="model"
            search
            searchInput={ { id: 'form-select-control-model' } }
            noResultsMessage="Результатов не найдено"
        />
    )
};

export default Model;

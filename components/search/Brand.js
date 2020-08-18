import React, { useEffect } from 'react';
import { Form, Select } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { setBrand, setModel } from "../../store/searchFilter/action";
import { getBrandsByCategory } from "../../store/brands/action";

const Brand = () => {
    const dispatch = useDispatch();

    const brands = useSelector((state) => state.brands);
    const brand = useSelector((state) => state.searchFilter.brand);
    const category = useSelector((state) => state.searchFilter.category);

    useEffect(() => {
        if (category) {
            dispatch(getBrandsByCategory({ category_id: category }));
        } else {
            // Clear
            dispatch(setBrand(''));
            dispatch(setModel(''));
        }
    }, [ category ]);

    return (
        <Form.Field
            control={ Select }
            options={ brands.map(({ name, _id }) => ({ text: name, value: _id })) }
            clearable={ true }
            label={ { children: 'Марка', htmlFor: 'form-select-control-brand' } }
            placeholder='Марка'
            value={ brand }
            onChange={ (e, { value }) => dispatch(setBrand(value)) }
            name="brand"
            search
            searchInput={ { id: 'form-select-control-brand' } }
            noResultsMessage="Результатов не найдено"
        />
    )
};

export default Brand;

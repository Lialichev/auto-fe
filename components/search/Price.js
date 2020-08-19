import React, { useEffect } from 'react';
import { Form, Input } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { setMaxPrice, setMinPrice } from "../../store/searchFilter/action";

const Price = () => {
    const dispatch = useDispatch();

    const min_price = useSelector((state) => state.searchFilter.min_price);
    const max_price = useSelector((state) => state.searchFilter.max_price);

    const handleChange = (evt) => {
        if (evt.target.validity.valid) {
            dispatch(setMinPrice(evt.target.value))
        }
    }

    return (
        <>
            <Form.Field>
                <label>Цена</label>
                <Input
                    label='$'
                    placeholder='от'
                    type="text"
                    pattern="[0-9]*"
                    name="min_price"
                    value={ min_price }
                    onChange={ ({ target }, { value }) => {
                        if (target.validity.valid) dispatch(setMinPrice(value))
                    } }
                    fluid
                />
            </Form.Field>
            <Form.Field>
                <label
                    style={ {
                        color: 'transparent',
                        pointerEvents: 'none',
                        userSelect: 'none'
                    } }
                >
                    Цена
                </label>
                <Input
                    label='$'
                    placeholder='до'
                    type="text"
                    pattern="[0-9]*"
                    name="max_price"
                    value={ max_price }
                    onChange={ ({ target }, { value }) => {
                        if (target.validity.valid) dispatch(setMaxPrice(value))
                    } }
                    fluid
                />
            </Form.Field>
        </>
    )
};

export default Price;

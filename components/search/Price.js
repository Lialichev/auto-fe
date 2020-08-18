import React from 'react';
import { Form, Input } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { setFromPrice, setToPrice } from "../../store/searchFilter/action";

const Price = () => {
    const dispatch = useDispatch();

    const from_price = useSelector((state) => state.searchFilter.from_price);
    const to_price = useSelector((state) => state.searchFilter.to_price);

    return (
        <>
            <Form.Field>
                <label>Цена</label>
                <Input
                    label='$'
                    type="number"
                    placeholder='от'
                    name="from_price"
                    value={ from_price }
                    onChange={ (e, { value }) => dispatch(setFromPrice(value)) }
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
                    type="number"
                    name="to_price"
                    value={ to_price }
                    onChange={ (e, { value }) => dispatch(setToPrice(value)) }
                    fluid
                />
            </Form.Field>
        </>
    )
};

export default Price;

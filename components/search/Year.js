import React, { useEffect } from 'react';
import { Form } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { setFromYear, setToYear } from "../../store/searchFilter/action";
import rangeYear from "../../helpers/rangeYear";

import styles from "../../styles/home.module.css";

const Price = () => {
    const dispatch = useDispatch();

    const from_year = useSelector((state) => state.searchFilter.from_year);
    const to_year = useSelector((state) => state.searchFilter.to_year);

    useEffect(() => {
        if ((from_year && to_year) && (from_year > to_year)) {
            dispatch(setFromYear(to_year));
            dispatch(setToYear(from_year));
        }
    }, [ from_year, to_year ]);

    return (
        <>
            <Form.Select
                fluid
                clearable={ true }
                label='Год'
                options={ rangeYear() }
                name="from_year"
                value={ from_year }
                onChange={ (e, { value }) => dispatch(setFromYear(value)) }
                placeholder='от'
            />
            <Form.Select
                className={ styles.hideLabel }
                fluid
                clearable={ true }
                label='Год'
                options={ rangeYear() }
                name="to_year"
                value={ to_year }
                onChange={ (e, { value }) => dispatch(setToYear(value)) }
                placeholder='до'
            />
        </>
    )
};

export default Price;

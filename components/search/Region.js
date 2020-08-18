import React from 'react';
import { Form, Select } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { setRegion } from "../../store/searchFilter/action";

const Region = () => {
    const dispatch = useDispatch();

    const regions = useSelector((state) => state.regions);
    const region = useSelector((state) => state.searchFilter.region);

    return (
        <Form.Field
            control={ Select }
            options={ regions.map(({ name, _id }) => ({ text: name, value: _id })) }
            clearable={ true }
            label={ { children: 'Регион', htmlFor: 'form-select-control-region' } }
            placeholder='Регион'
            value={ region }
            onChange={ (e, { value }) => dispatch(setRegion(value)) }
            name="region"
            search
            searchInput={ { id: 'form-select-control-region' } }
            noResultsMessage="Результатов не найдено"
        />
    )
};

export default Region;

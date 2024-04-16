import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { SearchbarContainer, Label, InputName, TextP } from './Searchbar.stytled';
import { Button } from '../Button/Button';

const schema = yup.object().shape({
    search: yup
        .string()
        .matches(
            /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
            'Name may contain only letters, apostrophe, dash and spaces.'
        ),
});

const initialValues = {
    search: '',
};

export const Searchbar = ({ setSearch }) => {
    const onSubmit = (values, { resetForm }) => {
        console.log(values);
        console.log(values.search);

        {
            values.search && setSearch(values.search);
        }
        resetForm();
    };

    return (
        <SearchbarContainer>
            <Formik initialValues={initialValues} validationSchema={schema} onSubmit={onSubmit}>
                <Form autoComplete="off">
                    <Label htmlFor="name">
                        <Field
                            as={InputName}
                            type="text"
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                            id="search"
                            name="search"
                        />
                        <ErrorMessage name="name">
                            {errorMessage => <TextP error={!!errorMessage}>{errorMessage}</TextP>}
                        </ErrorMessage>
                    </Label>
                    <Button value="Search" type="submit" />
                </Form>
            </Formik>
        </SearchbarContainer>
    );
};

Searchbar.propTypes = {
    setSearch: PropTypes.func.isRequired,
};

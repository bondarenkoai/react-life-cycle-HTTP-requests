import { Component } from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import {
    SearchbarContainer,
    Label,
    InputName,
    TextP,
} from "./Searchbar.stytled";
import { Button } from "../Button/Button";

const schema = yup.object().shape({
    name: yup
        .string()
        .matches(
            /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
            "Name may contain only letters, apostrophe, dash and spaces."
        ),
    number: yup
        .string()
        .matches(
            /^\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
            'Phone number must be digits and can contain spaces, dashes, parentheses and can start with "+".'
        ),
});

const initialValues = {
    name: "",
    number: "",
};
console.log("sadsda");

export class Searchbar extends Component {
    onSubmit = () => {
        console.log("Hahaha");
    };

    render() {
        return (
            <SearchbarContainer>
                <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={this.onSubmit}
                >
                    <Form autoComplete="off">
                        <Label htmlFor="name">
                            <Field
                                as={InputName}
                                type="text"
                                autoComplete="off"
                                autoFocus
                                placeholder="Search images and photos"
                                id="searchInput"
                                name="searchInput"
                            />
                            <ErrorMessage name="name">
                                {(errorMessage) => (
                                    <TextP error={!!errorMessage}>
                                        {errorMessage}
                                    </TextP>
                                )}
                            </ErrorMessage>
                        </Label>
                        <Button value="Search" type="submit" />
                    </Form>
                </Formik>
            </SearchbarContainer>
        );
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

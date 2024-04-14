import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { Button, Label, InputName, TextP } from "../Phonebook.styled";

const schema = yup.object().shape({
    name: yup
        .string()
        .required("Name is required")
        .matches(
            /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
            "Name may contain only letters, apostrophe, dash and spaces."
        ),
    number: yup
        .string()
        .required("Number is required")
        .matches(
            /^\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
            'Phone number must be digits and can contain spaces, dashes, parentheses and can start with "+".'
        ),
});

const initialValues = {
    name: "",
    number: "",
};

export const ContactForm = ({ setContact }) => {
    const onSubmit = (values, { resetForm }) => {
        console.log(values);
        console.log(values.name);
        console.log(values.number);
        const newContact = {
            id: nanoid(),
            name: values.name,
            number: values.number,
        };
        setContact(newContact);
        resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={onSubmit}
        >
            <Form autoComplete="off">
                <Label htmlFor="name">
                    Name
                    <Field
                        as={InputName}
                        type="text"
                        name="name"
                        placeholder="Enter name..."
                        required
                    />
                    <ErrorMessage name="name">
                        {(errorMessage) => (
                            <TextP error={!!errorMessage}>{errorMessage}</TextP>
                        )}
                    </ErrorMessage>
                </Label>
                <Label htmlFor="number">
                    Number
                    <Field
                        as={InputName}
                        type="tel"
                        name="number"
                        placeholder="Enter number..."
                        required
                    />
                    <ErrorMessage name="number">
                        {(errorMessage) => (
                            <TextP error={!!errorMessage}>{errorMessage}</TextP>
                        )}
                    </ErrorMessage>
                </Label>
                <Button type="submit">Add contact</Button>
            </Form>
        </Formik>
    );
};

ContactForm.propTypes = {
    setContact: PropTypes.func.isRequired,
};

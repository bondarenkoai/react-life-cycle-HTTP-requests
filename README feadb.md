![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![JS](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

## react-feedback-phonebook

### Task:

1. Created the react-components repository.
2. There are two links provided upon homework submission: to the source files and the working pages
   of each task on GitHub Pages.
3. No errors or warnings appear in the console when running the code.
4. Each component has a separate file in the src/components folder.
5. All expected props are passed to each component when called.
6. The JavaScript code is clean and understandable, using Prettier.
7. Styling is done using CSS modules or Styled Components.

### ✅ Feedback Widget:

Like most companies, Expresso cafe collects feedback from its customers. Your task is to create an
application for collecting statistics. There are only three feedback options: good, neutral, and
bad.

-   Step 1:  
    The application should display the number of collected feedback for each category. The
    application should not store feedback statistics between different sessions (page refreshes).

    The state of the application must be in the following format, and no new properties should be
    added.

```
state = {
  good: 0,
  neutral: 0,
  bad: 0
}
```

The interface may look like this:

![Feedback Widget](./readme-img/image.png)

-   Step 2:  
    Extend the functionality of the application to display more feedback statistics in the
    interface. Add displaying the total number of collected feedback from all categories and the
    percentage of positive feedback. Create helper methods countTotalFeedback() and
    countPositiveFeedbackPercentage() that calculate these values based on the data in the state
    (computed data).

![Feedback Widget Extended](./readme-img/image-1.png)

-   Step 3:  
    Refactor the application. The state of the application should remain in the root component
    `<App>`.

    Move the statistics display to a separate component
    `<Statistics good={} neutral={} bad={} total={} positivePercentage={}>`.  
    Move the button block to the `<FeedbackOptions options={} onLeaveFeedback={}>` component.  
    Create a `<Section title="">` component that renders a section with a title and children. Wrap
    each `<Statistics>` and `<FeedbackOptions>` in the created section component.

-   Step 4:  
    Extend the functionality of the application so that the statistics block is rendered only after
    at least one feedback has been collected. Display a message about the absence of statistics in
    the `<Notification message="There is no feedback">` component.

### ✅ Contact Book:

Write an application for storing contacts in a phonebook.

-   Step 1:  
    The application should consist of a form and a list of contacts. At this step, implement adding
    contact names and displaying the list of contacts. The application should not store contacts
    between different sessions (page refreshes).

    Use this input markup for the contact name:

`<input type="text" name="name" required />`

    The state stored in the parent component `<App>` must be in the following format, and no new
    properties should be added.

```
state = {
    contacts: [],
    name: ''
    }
```

    Each contact should be an object with properties `name` and `id`. Use any appropriate package, such
    as `nanoid`, to generate identifiers. After completing this step, the application should look
    something like this.

<img src="./readme-img/image-2.png" alt="alt text" width="500" height="200">

-   Step 2:  
    Expand the functionality of the application to allow users to add phone numbers. To do this, add
    `<input type="tel">` to the form and a property to store its value in the state.

```
state = {
    contacts: [],
    name: '',
    number: ''
    }
```

    Use this input markup for the contact number:

`<input type="tel" name="number" required />`

    After completing this step, the application should look something like this:

<img src="./readme-img/image-3.png" alt="alt text" width="500" height="200">  
  
-   Step 3:  
    Add a search field that can be used to filter the list of contacts by name.  
    The search field is an input without a form, whose value is stored in the state (controlled component).  
    The filtering logic should be case-insensitive.
  
```  
state = {
  contacts: [],
  filter: '',
  name: '',
  number: ''
}
```

<img src="./readme-img/image-4.png" alt="alt text" width="500" height="200">

    When working on new functionality, it is convenient to hardcode some data in the state. This
    eliminates the need to manually enter data in the interface for testing the new functionality. For
    example, you can use the following initial state.

```
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
}
```

-   Step 4:  
    If your application is implemented in a single `<App>` component, refactor by extracting
    relevant parts into separate components. Only the `contacts` and `filter` properties should
    remain in the state of the root `<App>` component.

```
state = {
  contacts: [],
  filter: ''
}
```

    It is sufficient to extract four components: the contact addition form, the contact list, the
    contact list item, and the search filter.

    After refactoring, the root component of the application will look like this:

```
<div>
  <h1>Phonebook</h1>
  <ContactForm ... />

  <h2>Contacts</h2>
  <Filter ... />
  <ContactList ... />
</div>
```

-   Step 5 :  
    Prohibit users from adding contacts whose names are already present in the phonebook. When
    attempting such action, display an alert with a warning.

    <img src="./readme-img/image-5.png" alt="alt text" width="500" height="200">

-   Step 6 :  
    Expand the functionality of the application to allow users to delete previously saved contacts.

    <img src="./readme-img/image-6.png" alt="alt text" width="500" height="200">

### ✅ Phonebook (`Formik` library):

-   Step 1:  
    Write an application to store contacts in a phonebook using the Formik library:  
    Visit https://formik.org to get started with Formik.

    `<Formik />` is a component that helps you build forms. It uses a visual template that has
    become popular thanks to libraries like React Motion and React Router.

    `<Form />` is a small wrapper around the HTML `<form>` element that automatically connects to
    Formik's `handleSubmit` and `handleReset`. All other props are passed directly to the DOM node.

    Define initial form values:

    ```
        const initialValues = {
        name: '',
        number: '',
        };
    ```

    Create the `FormFormik` component: The component receives a `setContact` prop, which is used to
    add a new contact. `Formik` component is used to manage the form state. The `onSubmit` function
    is called when the form is submitted, it adds a new contact and resets the form. The form has
    the attribute `autoComplete="off"` to disable browser autofill.

-   Step 2:  
    Using `Field` for data input: The `Field` component is used to define input fields. The
    `as={InputName}` attribute sets the `InputName` component to be used for the input field, which
    is imported from the styles file.

-   Step 3:  
    Add form validation using `Yup`():

        ```
        const schema = yup.object().shape({
        name: ...,
        number: ...,
        });
        ```

-   Step 4:  
    `<ErrorMessage />` is a component that displays an error message for the specified field if that
    field has been visited (i.e., `touched[name] === true`) and there is an error message present.
    It expects that all error messages for a given field are stored as a string.

> [!TIP]
>
> ## Code stats:
>
> `Branches:`
>
> > Total: 17 hrs 17 mins => main
>
> `Languages:`
>
> > `JavaScript - 14h 26m (83%)`  
> > `Markdown - 1h 41m (9%)`  
> > `JSON - 50m (5%)`  
> > `CSS - 10m (2%)`  
> > `Git Config - 6m (1%)`  
> > `Other - 4m (1%)`

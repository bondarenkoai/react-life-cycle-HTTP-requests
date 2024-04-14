import css from "./App.module.css";
// import { Phonebook } from './Phonebook/Phonebook';
import { PhonebookFormik } from "./FormFormik/FormFormik";

export default function App() {
    return (
        <div className={css.container}>
            {/* <Phonebook /> */}
            <PhonebookFormik />
        </div>
    );
}

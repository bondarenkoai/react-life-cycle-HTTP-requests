import css from "./App.module.css";
// import { Phonebook } from './Phonebook/Phonebook';
import { Phonebook } from "./PhonebookForm/Phonebook";

export default function App() {
    return (
        <div className={css.container}>
            {/* <Phonebook /> */}
            <Phonebook />
        </div>
    );
}

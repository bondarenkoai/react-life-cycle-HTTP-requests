import css from "./App.module.css";
// import { Phonebook } from "./PhonebookForm/Phonebook";
import { PixabayGallery } from "./PixabayGallery/PixabayGallery";

export default function App() {
    return (
        <div className={css.container}>
            {/* <Phonebook /> */}
            <PixabayGallery />
        </div>
    );
}

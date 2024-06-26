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

1. Створений репозиторій react-life-cycle-HTTP-requests.
2. У стані компонентів зберігається мінімально необхідний набір даних, решта обчислюється.
3. Під час запуску коду завдання в консолі відсутні помилки та попередження.
4. Для кожного компонента є окрема папка з файлом React-компонента та файлом стилів.
5. Все, що компонент очікує у вигляді пропсів, передається йому під час виклику.
6. Імена компонентів зрозумілі та описові.
7. JS-код чистий і зрозумілий, використовується Prettier.
8. Стилізація виконана CSS-модулями або Styled Components.

### ✅ Книга контактів:

Візьми своє рішення завдання з попередньої домашньої роботи і додай зберігання контактів телефонної книги в localStorage. Використовуй методи життєвого циклу.

-   Крок 1 :  
    Під час додавання та видалення контакту контакти зберігаються у локальне сховище.

```
componentDidUpdate(prevProps, prevState) {
        if (this.state.contacts !== prevState.contacts) {
            console.log("update contacts");
            localStorage.setItem(
                "contacts",
                JSON.stringify(this.state.contacts)
            );
        }
    }
```

-   Крок 2 :  
    Під час завантаження застосунку контакти, якщо такі є, зчитуються з локального сховища і записуються у стан.

```
componentDidMount() {
        const storedData = JSON.parse(localStorage.getItem("contacts"));

        if (storedData) {
            this.setState({ contacts: storedData });
        }
    }
```

### ✅ Пошук зображень:

    Напиши застосунок пошуку зображень за ключовим словом.

-   Крок 1 :  
    Створи компоненти `<Searchbar>`, `<ImageGallery>`, `<ImageGalleryItem>`, `<Loader>`, `<Button>` і `<Modal>`. Готові стилі компонентів можна взяти у файлі styles.css і підправити під себе, якщо потрібно.

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

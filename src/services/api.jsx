import axios from 'axios';

const API_KEY = '39983641-8cceea4fb7f8edcc5cbde97e1';

// axios.defaults.baseURL =
//     'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 4,
};

export const getImages = async (searchValues, page) => {
    try {
        const response = await axios.get(`/?q=${searchValues}&page=${page}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

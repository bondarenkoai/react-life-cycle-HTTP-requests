import axios from 'axios';

const API_KEY = '39983641-8cceea4fb7f8edcc5cbde97e1';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 4,
};

export const getImages = async (searchValues, page) => {
    try {
        // Simulate a delay of 2 seconds
        await new Promise(resolve => setTimeout(resolve, 1000));

        const response = await axios.get(`/?q=${searchValues}&page=${page}`);

        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(`Not found image by request ${searchValues}`);
        }
    } catch (error) {
        console.error(error);
        return error;
    }
};
